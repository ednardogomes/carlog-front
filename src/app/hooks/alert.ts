import { useState, useCallback } from "react";
import { Message } from "@/app/types/message";



export function useAlert(duration?: number | undefined): [Message | null, (data: Message) => void] {
    const [alert, setAlert] = useState<Message | null>(null);
    const setDuration = () => {
        if (duration !== undefined) {
            return duration;
        }
        switch (alert?.type) {
            case 'success':
                return duration = 1500;
            case 'error':
                return duration = 5000;
            default:
                return duration = 2000;
        }
    }
    setDuration();

    const showAlert = useCallback(({ type, message }: Message) => {
        setAlert(null);

        setAlert({ type, message });

        setTimeout(() => {
            setAlert(null);
        }, duration);

    }, [setDuration]);

    return [alert, showAlert];
}