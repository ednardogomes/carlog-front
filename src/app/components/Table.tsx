type TabeType = {
    column: string; row: string
}

const getDeepValue = (obj: any[], path: string) => {
    const keys = path.split('.');

    return keys.reduce((current: any, key) => (current && current[key] !== undefined) ? current[key] : undefined, obj);
};

export function Table({ data, columns, loading }: { data: any[]; columns: TabeType[], loading: boolean | undefined }) {
    if (loading) {
        console.log('carregando dados');
    }
    if (!data || data.length === 0) {
        return <p className="text-gray-500">Nenhum dado para exibir.</p>;
    }
    return (
        <table className="min-w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className="border border-gray-300 px-4 py-2 bg-gray-100">{col.column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="bg-gray-50">
                        {columns.map((col, index) => (
                            <td key={index} className="border border-gray-300 px-4 py-2">{getDeepValue(row, col.row)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}