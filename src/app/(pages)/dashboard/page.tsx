import VehicleInfoCard from "@/app/components/vehicle/VehicleInforCard";

export default function Dashboard() {
    return (
        <div className="flex flex-col bg-gray-100 md:flex-row h-screen md:w-full gap-5 p-4">
            <VehicleInfoCard />
        </div>
    )
}