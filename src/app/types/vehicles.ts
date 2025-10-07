import { Maintenance } from "./maintenance";

export type Vehicle = {
    id: string;
    make: string;
    model: string;
    model_year: string;
    color: string;
    license_plate: string;
    maintenances: Maintenance[]
}
