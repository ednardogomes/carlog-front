import { useEffect, useState } from "react";
import { Maintenance } from "../types/maintenance";
import { getMaintenancesByVehicleService } from "../services/maintenanceService";

export default function useGetMaintenanceByVehicle(vehicleId: string) {
    const [maintenances, setMaintenances] = useState<Maintenance[]>([])
    const [loadingMaintenances, setLoadingMaintenances] = useState<boolean>()

    useEffect(() => {
        async function getMaintenancesByVehicle() {
            try {
                setLoadingMaintenances(true)
                const maintenances = await getMaintenancesByVehicleService(vehicleId);
                setMaintenances(maintenances)
            } catch (error) {
                console.error("Error ao buscar maintenções por veículo:", error);
            } finally {
                setLoadingMaintenances(false)
            }
        }
        getMaintenancesByVehicle()
    })
    return [maintenances, loadingMaintenances]
}