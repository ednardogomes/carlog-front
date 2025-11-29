'use client'
import { useEffect, useState } from "react"
import { getMaintenancesService } from "../services/maintenanceService"
import { Maintenances } from "../types/maintenance";
import { Table } from "./Table";

export default function MaintenanceDetails() {
    const maintenanceCols = [
        { column: 'Marca', row: 'vehicle.make' },
        { column: 'Modelo', row: 'vehicle.model' },
        { column: 'Quilometragem', row: 'km' },
        { column: 'Serviço Realizado', row: 'service' },
        { column: 'Custo do Serviço', row: 'cost' },
        { column: 'Dia do serviço', row: 'maintenance_date' },
        { column: 'Descrição', row: 'description' },
    ]

    const [maintenances, setMaintenances] = useState<Maintenances[]>([]);


    useEffect(() => {
        async function getMaintenances() {
            const data = await getMaintenancesService();
            setMaintenances(data)
        }
        getMaintenances();
    }, [])
    return (
        <div className="w-max-400px h-[600px] md:w-[1000px] overflow-auto">
            <Table data={maintenances} columns={maintenanceCols} />
        </div>
    )
}