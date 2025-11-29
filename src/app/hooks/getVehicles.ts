import { useCallback, useEffect, useState } from "react";
import { getVehiclesService } from "../services/vehicleService";
import { Vehicles } from "../types/vehicles";

interface UseVehiclesResult {
    vehicles: Vehicles[];
    loadingVehicles: boolean | null;
    refetchVehicles: () => Promise<void>;
}

export function useGetVehicles(): UseVehiclesResult {
    const [vehicles, setVehicles] = useState<Vehicles[]>([]);
    const [loadingVehicles, setLoadingVehicles] = useState<boolean | null>(null)

    const refetchVehicles = useCallback(async () => {
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
    }, []);
    useEffect(() => {
        refetchVehicles();
    }, [refetchVehicles]);
    return { vehicles, loadingVehicles, refetchVehicles };
}