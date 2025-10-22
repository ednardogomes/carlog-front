'use client'
import VehicleHeader from "@/app/components/vehicle/VehicleHeader";
import VehicleInfoCard from "@/app/components/vehicle/VehicleInfoCard";
import VehicleListCard from "@/app/components/vehicle/VehicleListCard";
import VehicleForm from "@/app/components/VehicleForm";
import useGetMaintenanceByVehicle from "@/app/hooks/getMaintenanceByVehicle";
import { useGetVehicles } from "@/app/hooks/getVehicles";
import { useCallback, useState } from "react";

export default function Dashboard() {
    const { vehicles, loadingVehicles } = useGetVehicles();

    const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);


    const { maintenances, loadingMaintenances } = useGetMaintenanceByVehicle(selectedVehicleId);

    const handleVehicleSelect = useCallback((vehicleId: string) => {
        setSelectedVehicleId(vehicleId);
        console.log(`Vehicle selected: ${vehicleId}`);
    }, []);

    const changeOpen = () => {
        setOpen(!open);
    }
    console.log(open);

    const selectedVehicle = vehicles.find(vehicle => vehicle.id === selectedVehicleId) || null;
    return (
        <div className="min-h-full max-w-6xl mx-auto text-slate-900 p-4 md:p-3">
            <VehicleHeader updateOpen={changeOpen} />
            <div className="shadow-2xl rounded-2xl md:flex">
                <VehicleListCard
                    vehicles={vehicles}
                    loading={loadingVehicles}
                    selectedVehicleId={selectedVehicleId}
                    onSelect={handleVehicleSelect}
                />

                <VehicleInfoCard
                    vehicle={selectedVehicle}
                    loading={loadingVehicles}
                    maintenances={maintenances}
                />
                <VehicleForm open={open} updateOpen={changeOpen} />
            </div>
        </div>
    )
}