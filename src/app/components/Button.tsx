type ButtonGreeProps = {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: ButtonGreeProps) {
    return (
        <div>
            <button className="bg-green-400 text-white font-bold py-2 px-4 rounded" onClick={onClick}>{text}</button>
        </div>
    )
}