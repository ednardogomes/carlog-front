import { Maintenances } from "./maintenance";

export type Vehicle = {
    id: string;
    make: string;
    model: string;
    model_year: string;
    color: string;
    license_plate: string;
    maintenances: Maintenances[]
}

export type UpdateVehicle = {
    make: string;
    model: string;
    model_year?: string;
    color?: string;
    license_plate?: string;
}
