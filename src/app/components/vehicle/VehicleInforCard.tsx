'use client'
import { useGetVehicles } from "@/app/hooks/getVehicles";
import VehicleCard from "./VehicleCard";
import VehicleDetails from "./VehicleDetails";

export default function VehicleInfoCard() {
    const { vehicles, loadingVehicles } = useGetVehicles()
    return (
        <div className="w-full h-[20rem] p-3 shadow-lg rounded-2xl flex flex-col gap-3">
            <h1 className="p-3 text-[1.3rem] text-gray-500">Veículos</h1>
            {vehicles.map((vehicle) =>

                <VehicleCard key={vehicle.id} data={vehicle} loading={loadingVehicles} maintenances_count={vehicle.maintenances} />)}
            <VehicleDetails />
        </div>
    )
}