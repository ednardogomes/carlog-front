import { Message } from "../types/message";

export default function Alert(data: Message) {
    const { type, message } = data;
    const positioningClasses = `${type ? 'fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out' : 'hidden'}`;
    const styleClasses = `${type === 'success' ? 'bg-green-500' : 'bg-red-500'} p-3 rounded-lg shadow-xl text-white text-center`;
    return (
        <div className={`${positioningClasses} ${styleClasses}`}>
            {message}
        </div>
    );
}