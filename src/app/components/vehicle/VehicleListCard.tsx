'use client'
import VehicleCard from "./VehicleCard";
import { Vehicle } from "@/app/types/vehicles";

export default function VehicleListCard({ vehicles, loading, selectedVehicleId, onSelect }: { vehicles: Vehicle[], loading: boolean | null, selectedVehicleId: string | null, onSelect: (id: string) => void }) {
    return (

        <div className={`flex flex-col gap-3 p-4 md:p-6 max-h-[60vh] overflow-auto`}>
            <h1 className="p-3 text-[1.3rem] text-gray-500">Veículos</h1>

            {vehicles.map((vehicle) =>

                <VehicleCard
                    key={vehicle.id}
                    data={vehicle}
                    loading={loading}
                    maintenances_count={vehicle.maintenances}
                    isSelect={vehicle.id === selectedVehicleId}
                    onSelect={onSelect}
                />)}
        </div>
    )
}