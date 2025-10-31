import { Vehicle } from "@/app/types/vehicles";

export default function Maintenance({ vehicle }: { vehicle: Vehicle | undefined }) {
    const hasNoMaintenance = vehicle?.maintenances.length === 0
    return (
        <div className="lg:col-span-2 w-full">
            <div className="space-y-3">
                {vehicle ?
                    (<h2 className="text-lg font-semibold">Manutenções<span className="mx-2"> &mdash; </span>{vehicle?.make} {vehicle?.model} - {vehicle?.model_year}</h2>) :
                    (<h2 className="text-lg font-semibold">Manutenções <span className="mx-2"> &mdash; </span> selecione um veículo</h2>)}
                <div className="flex items-center justify-between mb-4">
                    {hasNoMaintenance ?
                        (<div className="p-6 bg-white rounded-lg text-slate-500">Nenhuma manutenção registrada. Crie a primeira!</div>)
                        :
                        (<div className="grid gap-3 w-full max-h-[15rem] md:max-h-[25rem] overflow-y-auto">
                            {vehicle?.maintenances.map((maintenance) => (
                                <div
                                    key={maintenance.id}
                                    className="p-4 bg-white rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div>
                                        <div className="text-sm font-medium">{maintenance.service ?? 'Sem registro'}</div>
                                        <div className="text-xs text-slate-500 ">{maintenance.maintenance_date ?? 'Sem registro'} • R$ {maintenance.cost ?? 'Sem registro'}</div>
                                        <div className="mt-2 text-sm text-slate-600">{maintenance.description ?? 'Sem registro'}</div>
                                    </div>
                                </div>
                            ))}
                        </div>)}
                </div>
            </div>
        </div>
    )
}