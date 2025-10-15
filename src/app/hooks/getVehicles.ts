import { useEffect, useState } from "react";
import { getVehiclesService } from "../services/vehicleService";
import { Vehicle } from "../types/vehicles";

export function useGetVehicles() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loadingVehicles, setLoadingVehicles] = useState<boolean | null>(null)

    useEffect(() => {
        async function getVehicles() {
            try {
                setLoadingVehicles(true)
                const data = await getVehiclesService();
                setVehicles(data)
            } catch (error) {
                console.error("Error ao buscar veículos:", error);
                throw error;
            } finally {
                setLoadingVehicles(false)
            }
        }
        getVehicles();
    }, []
    )
    return { vehicles, loadingVehicles }
}