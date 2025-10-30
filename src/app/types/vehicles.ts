import { Maintenances } from "./maintenance";

export type Vehicles = {
    id: string;
    make: string;
    model: string;
    model_year: string;
    color: string;
    license_plate: string;
    maintenances: Maintenances[]
}
export type Vehicle = {
    make: string;
    model: string;
    model_year: string;
    color: string;
    license_plate: string;
    maintenances: Maintenances[]
}
export interface CreateVehicle extends Omit<Vehicle, 'model_year' | 'color' | 'license_plate'> {
    model_year?: string;
    color?: string;
    license_plate?: string;
}

export interface UpdateVehicle extends CreateVehicle {
    id: string
}
