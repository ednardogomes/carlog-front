import excludeMaintenance from "@/app/hooks/maintenance/excludeMaintenance";
import { MessageHandler } from "@/app/types/message";
import { Vehicle } from "@/app/types/vehicles";
import { formateToBr } from "@/app/utils/formatDate";
import { Trash2Icon, Pencil } from "lucide-react";

export default function Maintenance({
    vehicle,
    message,
    handleForm,
    handleFormCreate
}
    :
    {
        vehicle: Vehicle | undefined,
        message: MessageHandler,
        handleForm: (id: string | null) => void,
        handleFormCreate: () => void
    }) {
    const hasNoMaintenance = vehicle?.maintenances.length === 0

    const handleExclude = async (id: string | null, message: MessageHandler) => {
        await excludeMaintenance(id, message)
    }

    return (
        <div className="lg:col-span-2 w-full">
            <div className="space-y-3">
                <div className="flex gap-4">
                    {vehicle ?
                        (<h2 className="text-lg font-semibold">
                            Manutenções
                            <span className="mx-2">
                                &mdash;
                            </span>
                            {vehicle?.make} {vehicle?.model} - {vehicle?.model_year}
                        </h2>) :
                        (<h2 className="text-lg font-semibold">
                            Manutenções
                            <span className="mx-2">
                                &mdash;
                            </span> selecione um veículo
                        </h2>)}
                    <button
                        onClick={handleFormCreate}
                        className={
                            `bg-emerald-600 text-white px-4 py-2 rounded-md shadow-sm text-sm cursor-pointer
                            ${vehicle ?? 'hidden'}`
                        }>
                        Nova Manutenção
                    </button>
                </div>
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
                                        <div className="text-xs text-slate-500 ">{formateToBr(maintenance.maintenance_date) ?? 'Sem registro'} • R$ {maintenance.cost ?? 'Sem registro'}</div>
                                        <div className="mt-2 text-sm text-slate-600">{maintenance.description ?? 'Sem registro'}</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Pencil onClick={() => (handleForm(maintenance.id))} className="text-gray-500 h-3.5 w-3.5" />
                                        <Trash2Icon onClick={() => handleExclude(maintenance.id, message)} className="text-red-400 h-3.5 w-3.5" />
                                    </div>
                                </div>
                            ))}
                        </div>)}
                </div>
            </div>
        </div>
    )
}