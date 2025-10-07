import { Maintenance } from "@/app/types/maintenance";

export default function VehicleCard({ data, loading, maintenances_count }: { data: any, loading: boolean | undefined, maintenances_count: Maintenance[] }) {
    return (
        <div className=" bg-gray-100 flex justify-between items-center shadow-lg rounded-2xl p-4">
            <div className="p-2 bg-gray-200 content-center text-center rounded-2xl">
                <p className="font-medium text-[25px]">{data.make}</p>
            </div>
            {/* <div>
                {vehicles.map((vehicle, index) =>
                    <p key={index}>
                        <span>
                            {vehicle.make} {vehicle.model} - {vehicle.model_year}
                        </span>
                    </p>

                )}
            </div> */}
            <div>
                <p><span>{data.make} {data.model}</span> - <span>{data.model_year}</span></p>
                <p>{data.license_plate}</p>
            </div>
            <div></div>
            <div>{maintenances_count.length}</div>
        </div>
    )
}