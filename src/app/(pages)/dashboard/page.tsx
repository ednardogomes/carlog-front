'use client'
import Alert from "@/app/components/Alert";
import VehicleHeader from "@/app/components/vehicle/VehicleHeader";
import VehicleInfoCard from "@/app/components/vehicle/VehicleInfoCard";
import VehicleListCard from "@/app/components/vehicle/VehicleListCard";
import VehicleForm from "@/app/components/VehicleForm";
import { useAlert } from "@/app/hooks/alert";
import useGetMaintenanceByVehicle from "@/app/hooks/vehicle/getMaintenanceByVehicle";
import { useGetVehicles } from "@/app/hooks/vehicle/getVehicles";
import { Message } from "@/app/types/message";
import { useCallback, useEffect, useState } from "react";

export default function Dashboard() {
    const { vehicles, loadingVehicles, refetchVehicles } = useGetVehicles();

    const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [alert, showAlert] = useAlert(3000);

    const { maintenances, loadingMaintenances } = useGetMaintenanceByVehicle(selectedVehicleId);

    const handleVehicleSelect = useCallback((vehicleId: string) => {
        setSelectedVehicleId(vehicleId);
    }, []);

    const handleCreateNewVehicle = () => {
        setIsCreating(true);
        setOpen(true);
    }

    const handleUpdateVehicle = () => {
        setIsCreating(false);
        setOpen(true);
    }

    const changeOpen = () => {
        setOpen(!open);
    }

    const handleMessage = (message: Message) => {
        showAlert(message);
    }

    useEffect(() => {

        if (!open && alert?.type === 'success') {
            refetchVehicles();
        }
    }, [open, alert]);

    useEffect(() => {
        if (!open && alert?.type === 'success') {
            refetchVehicles();
        }
    }, [open, alert, refetchVehicles]);


    const choiceVehicle = vehicles.find(vehicle => vehicle.id === selectedVehicleId) || undefined;
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
                    handleForm={handleUpdateVehicle}
                    message={handleMessage}
                />
                <VehicleForm open={open} updateOpen={changeOpen} vehicle={choiceVehicle} isCreating={isCreating} message={handleMessage} />
            </div>
        </div>
    )
}