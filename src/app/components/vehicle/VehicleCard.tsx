import { Maintenances } from "@/app/types/maintenance";
import { useCallback } from "react";

export default function VehicleCard({ data, loading, maintenances_count, isSelect, onSelect }: { data: any, loading: boolean | null, maintenances_count: Maintenances[], isSelect: boolean, onSelect: (id: string) => void }) {
    if (data.length === 0) {
        return <div className="p-4 text-center text-slate-500">Nenhum veículo encontrado.</div>;
    }

    const handleClick = useCallback(() => {
        onSelect(data.id)
    }, [onSelect, data.id])
    return (
        <div
            onClick={handleClick}
            className={`flex justify-between items-center p-4 ${isSelect ? "bg-white rounded-lg" : "border-none"}`}
        >
            <div className="p-2 bg-gray-200 content-center text-center rounded-2xl">
                <p className="font-medium text-[25px]">{data.make}</p>
            </div>
            <div>
                <p><span>{data.make} {data.model}</span> - <span>{data.model_year}</span></p>
                <p>{data.license_plate}</p>
            </div>
            <div></div>
            <div>{maintenances_count.length}</div>
        </div>
    )
}