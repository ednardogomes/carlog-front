export type Message = {
    type: 'success' | 'error' | null | undefined;
    message: string | null | undefined;
};

export type MessageHandler = (message: Message) => void;