'use client'
import createMaintenance from "@/handlers/maintenance/createMaintenance";
import updateMaintenance from "@/handlers/maintenance/updateMaintenance";
import { Maintenances, UpdateMaintenance } from "@/app/types/maintenance";
import { MessageHandler } from "@/app/types/message";
import { applyDateMask, formateToBr, formatToISODate } from "@/app/utils/formatDate";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function MaintenanceForm({
    maintenance, open, isCreating, vehicleId, updateOpen, message
}: {
    maintenance: Maintenances | undefined,
    open: boolean,
    isCreating: boolean,
    vehicleId: string
    updateOpen: () => void,
    message: MessageHandler
}) {

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<Maintenances>({
        mode: 'onChange',
        defaultValues: {
            id: null,
            vehicle_id: null,
            km: "",
            service: "",
            cost: null,
            maintenance_date: "",
            description: "",
        }
    });
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<Maintenances> = async (maintenance) => {
        const submissionData = {
            ...maintenance, cost: Number(maintenance.cost), maintenance_date: maintenance.maintenance_date.includes('/')
                ? formatToISODate(maintenance.maintenance_date)
                :
                maintenance.maintenance_date
        }
        if (isCreating) {
            createMaintenance(vehicleId, submissionData, message, updateOpen)
        }
        if (!isCreating) {
            updateMaintenance(submissionData, message, updateOpen)
        }
    }

    useEffect(() => {
        if (open) {
            if (isCreating) {
                reset({
                    km: "",
                    service: "",
                    cost: null,
                    maintenance_date: "",
                    description: "",
                });
                return;
            }
            if (!isCreating && maintenance) {
                const formattedDate = String(maintenance.maintenance_date).includes('-')
                    ? formateToBr(String(maintenance.maintenance_date))
                    : String(maintenance.maintenance_date);

                const formattedMaintenance: UpdateMaintenance = {
                    id: maintenance.id,
                    service: maintenance.service,
                    description: maintenance.description,
                    km: String(maintenance.km),
                    cost: Number(maintenance.cost),
                    maintenance_date: formattedDate,
                };

                reset(formattedMaintenance);
            }
        }
    }, [maintenance, reset, isCreating, open]);

    useEffect(() => {
        if (!open) {
            reset({
                id: null,
                vehicle_id: null,
                km: "",
                service: "",
                cost: null,
                maintenance_date: "",
                description: "",
            });
        }
    }, [open, reset]);

    return (
        <form className={`${open ? "fixed inset-0 z-50 flex items-center justify-center bg-black/30 " : "hidden"}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-xl lg:w-2xl">
                <h2 className="text-2xl font-bold mb-4">{isCreating ? "Cadastrar nova manutenção" : "Atualizar manutenção"}</h2>
                <div className="mb-4">
                    <input
                        placeholder="Serviço realizado"
                        {...register("service", { required: "Campo obrigatório" })}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service?.message}</p>}
                </div>
                <div className="mb-4">
                    <input
                        placeholder="Quilometragem Atual do veículo"
                        {...register("km")}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.km && <p className="text-red-500 text-sm mt-1">{errors.km?.message}</p>}
                </div>
                <div className="mb-4">
                    <Controller
                        name="maintenance_date"
                        control={control}
                        rules={{
                            validate: (value) => {
                                if (!value) return true
                                if (typeof value === 'string' && value.includes('-')) return true;
                                const isoDate = formatToISODate(value)
                                return isoDate ? true : 'Data inválida ou incompleta. Use DD/MM/AAAA.'
                            },
                            required: "Campo obrigatório"
                        }}
                        render={({ field }) => (
                            <input
                                type="text"
                                placeholder="Data da manutenção (DD/MM/AAA)"
                                className="w-full border border-gray-300 p-2 rounded"
                                value={
                                    field.value && String(field.value).includes('-')
                                        ?
                                        formateToBr(String(field.value))
                                        :
                                        field.value
                                }
                                onChange={(e) => {
                                    const maskedBrlDate = applyDateMask(e.target.value);
                                    field.onChange(maskedBrlDate)
                                }}
                                onBlur={(e) => {
                                    if (e.target.value.length === 10) {
                                        const isoValue = formatToISODate(e.target.value)
                                        field.onChange(isoValue);
                                    } else {
                                        field.onChange(e.target.value)
                                    }
                                    field.onBlur();
                                }}
                            />
                        )}
                    />
                    {errors.maintenance_date && <p className="text-red-500 text-sm mt-1">{errors.maintenance_date.message}</p>}
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Custo da manutenção"
                        {...register("cost", { required: "Campo obrigatório" })}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.cost && <p className="text-red-500 text-sm mt-1">{errors.cost.message}</p>}
                </div>
                <div className="mb-4">
                    <input
                        placeholder="Descrição do serviço"
                        {...register("description")}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>}
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button
                        type="button"
                        onClick={updateOpen}
                        className="text-sm border-1 py-2 px-4 border-gray-200 text-slate-500 p-2 rounded"
                    >
                        Fechar
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                        className="text-sm bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700"
                    >
                        {isCreating ? "Cadastrar" : "Atualizar"}
                    </button>
                </div>
            </div>
        </form>
    )
}