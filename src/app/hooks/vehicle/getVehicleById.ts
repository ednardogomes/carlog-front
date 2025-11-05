// import { useEffect, useState } from "react";
// import { Vehicle } from "../../types/vehicles";
// import { getVehicleByIdService } from "../../services/vehicleService";

// export function useGetVehicles(id: string) {
//     const [vehicle, setVehicle] = useState<Vehicle[]>([]);
//     const [loadingVehicle, setLoadingVehicle] = useState<boolean>()
//     const [error, setError] = useState<string>('')

//     useEffect(() => {
//         async function getVehiclesById() {
//             try {
//                 setLoadingVehicle(true)
//                 const data = await getVehicleByIdService(id);
//                 setVehicle(data)
//             } catch (error) {
//                 setError(`Erro ao buscar veículo pelo ID`);
//                 console.error("Erro ao buscar veículo pelo ID", error);
//                 throw error;
//             } finally {
//                 setLoadingVehicle(false);
//             }
//         }
//         getVehiclesById();
//     }, [])
//     return { vehicle, loadingVehicle, error }
// }