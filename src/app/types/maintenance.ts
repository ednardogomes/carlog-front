export type Maintenances = {
    id: string | null;
    vehicle_id: string | null;
    km: string;
    service: string;
    cost: number | null;
    maintenance_date: string;
    description: string;
}

export type Maintenance = {
    km: string;
    service: string;
    cost: string;
    maintenance_date: string;
    description: string;
}

export type CreateMaintenance = {
    service: string
    cost: number
    km?: string
    maintenance_date?: string
    description?: string
}

export type UpdateMaintenance = {
    id: string | null
    service: string
    cost: number
    km?: string
    maintenance_date?: string
    description?: string
}