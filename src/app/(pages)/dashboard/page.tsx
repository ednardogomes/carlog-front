'use client'
import VehicleHeader from "@/app/components/vehicle/VehicleHeader";
import VehicleInfoCard from "@/app/components/vehicle/VehicleInfoCard";
import VehicleListCard from "@/app/components/vehicle/VehicleListCard";
import VehicleForm from "@/app/components/VehicleForm";
import useGetMaintenanceByVehicle from "@/app/hooks/getMaintenanceByVehicle";
import { useGetVehicles } from "@/app/hooks/getVehicles";
import { Vehicle } from "@/app/types/vehicles";
import { use, useCallback, useEffect, useState } from "react";

export default function Dashboard() {
    const { vehicles, loadingVehicles, refetchVehicles } = useGetVehicles();

    const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', message: string }>()

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

    const handleMessage = ({ type, msg }: { type: 'success' | 'error', msg: string }) => {
        setMessage({ type, message: msg });
    }

    useEffect(() => {

        if (!open && message?.type === 'success') {
            refetchVehicles();
        }
    }, [open, message]);

    const choiceVehicle = vehicles.find(vehicle => vehicle.id === selectedVehicleId) || undefined;
    return (
        <div className="min-h-full max-w-6xl mx-auto text-slate-900 p-4 md:p-3">
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
                />
                <VehicleForm open={open} updateOpen={changeOpen} vehicle={choiceVehicle} isCreating={isCreating} message={handleMessage} />
            </div>
        </div>
    )
}