'use client'
import Alert from "@/app/components/Alert";
import MaintenanceForm from "@/app/components/maintenance/MaintenanceForm";
import VehicleHeader from "@/app/components/vehicle/VehicleHeader";
import VehicleInfoCard from "@/app/components/vehicle/VehicleInfoCard";
import VehicleListCard from "@/app/components/vehicle/VehicleListCard";
import VehicleForm from "@/app/components/VehicleForm";
import { useAlert } from "@/app/hooks/alert";
import useGetMaintenanceByVehicle from "@/app/hooks/getMaintenanceByVehicle";
import { useGetVehicles } from "@/app/hooks/getVehicles";
import { Message } from "@/app/types/message";
import { useCallback, useEffect, useState } from "react";

export default function Dashboard() {
    const { vehicles, loadingVehicles, refetchVehicles } = useGetVehicles();

    const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
    const [selectedMaintenanceId, setSelectedMaintenanceId] = useState<string | null>(null);
    const [openVehicleForm, setOpenVehicleForm] = useState<boolean>(false);
    const [openMaintenanceForm, setOpenMaintenanceForm] = useState<boolean>(false);
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [alert, showAlert] = useAlert(3000);

    const { maintenances, loadingMaintenances } = useGetMaintenanceByVehicle(selectedVehicleId);

    const handleVehicleSelect = useCallback((vehicleId: string) => {
        setSelectedVehicleId(vehicleId);
    }, []);

    const handleCreateNewVehicle = () => {
        setIsCreating(true);
        setOpenVehicleForm(true);
    }
    const handleUpdateVehicle = () => {
        setIsCreating(false);
        setOpenVehicleForm(true);
    }
    const changeOpenVehicleForm = () => {
        setOpenVehicleForm(!open);
    }

    const handleCreateNewMaintenance = () => {
        setIsCreating(true);
        setOpenMaintenanceForm(true);
    }
    const handleUpdateMaintenance = (id: string | null) => {
        setIsCreating(false);
        setOpenMaintenanceForm(true);
        setSelectedMaintenanceId(id)
    }
    const changeOpenMaintenanceForm = () => {
        setOpenMaintenanceForm(!open);
    }

    const handleMessage = (message: Message) => {
        showAlert(message);
    }

    useEffect(() => {

        if (!openVehicleForm && alert?.type === 'success') {
            refetchVehicles();
        }
    }, [openVehicleForm, alert]);

    useEffect(() => {
        if (!openVehicleForm && alert?.type === 'success') {
            refetchVehicles();
        }
    }, [openVehicleForm, alert, refetchVehicles]);


    const choiceVehicle = vehicles.find(vehicle => vehicle.id === selectedVehicleId) || undefined;
    const choiceMaintenance = choiceVehicle?.maintenances.find(maintenance => maintenance.id === selectedMaintenanceId)
    return (
        <div className="min-h-full max-w-6xl mx-auto text-slate-900 p-4 md:p-3">
            <Alert type={alert?.type} message={alert?.message} />
            <VehicleHeader openForm={handleCreateNewVehicle} />
            <div className="shadow-2xl rounded-2xl md:flex">
                <VehicleListCard
                    vehicles={vehicles}
                    loading={loadingVehicles}
                    selectedVehicleId={selectedVehicleId}
                    onSelect={handleVehicleSelect}
                />

                <VehicleInfoCard
                    vehicle={choiceVehicle}
                    loading={loadingVehicles}
                    maintenances={maintenances}
                    handleVehicleForm={handleUpdateVehicle}
                    handleCreateMaintenanceForm={handleCreateNewMaintenance}
                    handleMaintenanceForm={handleUpdateMaintenance}
                    message={handleMessage}
                />
                <VehicleForm
                    open={openVehicleForm}
                    updateOpen={changeOpenVehicleForm}
                    vehicle={choiceVehicle}
                    isCreating={isCreating}
                    message={handleMessage}
                />
                <MaintenanceForm
                    open={openMaintenanceForm}
                    vehicleId={selectedVehicleId}
                    updateOpen={changeOpenMaintenanceForm}
                    maintenance={choiceMaintenance}
                    isCreating={isCreating}
                    message={handleMessage} />
            </div>
        </div>
    )
}