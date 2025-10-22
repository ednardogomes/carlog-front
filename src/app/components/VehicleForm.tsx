'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { UpdateVehicle } from "../types/vehicles";
import { useState } from "react";

export default function VehicleForm({ vehicle, open, updateOpen }: { vehicle?: UpdateVehicle, open: boolean, updateOpen?: () => void }) {
    const { register, handleSubmit, formState: { errors } } = useForm<UpdateVehicle>();
    const onSubmit: SubmitHandler<UpdateVehicle> = (vehicle) => console.log(vehicle)


    return (
        <div>
            <form className={`${open ? "fixed inset-0 z-50 flex items-center justify-center bg-black/30 " : "hidden"}`} >
                <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-xl lg:w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Add New Vehicle</h2>
                    <div className="mb-4">
                        <input
                            placeholder="Marca ex: Chebrolet"
                            {...register("make", { required: "Campo obrigatório" })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.make && <p className="text-red-500 text-sm mt-1">{errors.make.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            placeholder="Modelo ex: Onix"
                            {...register("model", { required: "Campo obrigatório" })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            placeholder={`Ano ex: ${(new Date().getFullYear())}`}
                            {...register("model_year", {
                                max: { value: new Date().getFullYear() + 1, message: `O ano do modelo não pode ser maior que ${new Date().getFullYear() + 1}` }
                            })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.model_year && <p className="text-red-500 text-sm mt-1">{errors.model_year.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            placeholder="Cor ex: preto"
                            {...register("color", { required: "Model is required" })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            placeholder="Placa ex: ABC1234 ou ABC1C34"
                            {...register("license_plate", { required: "Model is required" })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
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
                            Add Vehicle
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}