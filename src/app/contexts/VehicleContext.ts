import React, { createContext } from "react";
import { Vehicle } from "../types/vehicles";
import { useGetVehicles } from "../hooks/getVehicles";

interface VehicleContextType {
    vehicles: Vehicle[];
    loadingVehicles: boolean;
    // error: string | null;
    refetchVehicles: () => void;
}

const initialContext: VehicleContextType = {
    vehicles: [],
    loadingVehicles: true,
    // error: null,
    refetchVehicles: () => { console.warn('Refetch called without Provider.'); },
};



export const VehicleContext = createContext();