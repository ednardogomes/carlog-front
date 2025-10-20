'use client'
import VehicleSkeleton from "@/app/skeletons/VehicleSkeleton";
import { Vehicle } from "@/app/types/vehicles";
import Maintenance from "../maintenance/Maintenance";
import type { Maintenances } from "@/app/types/maintenance";

export default function VehicleInfoCard(
    { vehicle, loading, maintenances }: { vehicle: Vehicle | null, loading: boolean | null, maintenances: Maintenances[] | null }) {
    console.log(vehicle?.maintenances?.[0]);
    return (
        <div className="flex flex-col gap-3 w-full h-full">
            <div className="bg-gradient-to-br from-white to-slate-50 h-[auto] flex flex-col md:flex-row gap-5 p-4">
                <div className="bg-gradient-to-b from-gray-200 to-gray-50 flex flex-col w-full h-[60vh] md:h-full gap-4 rounded-2xl shadow-lg">
                    <div className="mt-3"></div>

                    <div className="m-0.5 text-center w-full h-full">
                        {loading ? <VehicleSkeleton /> : "Veículo sem foto"}
                    </div>

                    <div className="p-4 bg-slate-50 rounded-b-2xl w-full h-full">
                        <div className="flex items-start justify-between mt-10">
                            <div>
                                <p className="font-semibold text-lg">{`${vehicle?.make ?? ''}${vehicle?.model ?? ''} - ${vehicle?.model_year ?? ''}`}</p>
                                <p className="text-xs text-slate-400">{`${vehicle?.license_plate ?? ''}`}</p>
                            </div>
                            <p className="text-slate-500">{`${vehicle?.maintenances.length ?? ''}`}</p>
                        </div>

                        <div className="mt-4 flex gap-2">
                            <button className="flex-1 py-2 rounded-md border border-slate-200 bg-white text-sm shadown-sm">Editar Veículo</button>
                            <button className="py-2 px-3 rounded-md bg-red-50 text-red-600 text-sm border border-red-100">Excluir</button>
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 text-center rounded-lg shadow-sm">
                            <p className="text-xs text-slate-400">Última manutenção</p>
                            <p className="text-sm font-medium">
                                {vehicle?.maintenances?.[0]?.maintenance_date || '-'}
                            </p>
                        </div>

                        <div className="bg-white p-3 text-center rounded-lg shadow-sm">
                            <p className="text-xs text-slate-400">Gasto total</p>
                            <p className="text-sm font-medium">R$300</p>
                        </div>
                    </div>

                </div>

                <Maintenance vehicle={vehicle} />
            </div>
        </div>
    )
}