export function formateToBr(isoDateString: string | undefined) {
    if (!isoDateString) {
        return '-';
    }

    const date = new Date(isoDateString);

    if (isNaN(date.getTime())) {
        return '-';
    }

    const formatedDate = date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'UTC'
    });

    return formatedDate;
}