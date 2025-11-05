export const formatDateObjectToISOSimple = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const formateToBr = (isoDate: string | undefined): string => {
    if (!isoDate) {
        return '-';
    }

    const date = new Date(isoDate);

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

export const formatToISODate = (brlDate: string | undefined): string => {
    if (brlDate && brlDate.includes('-') && brlDate.length === 10) return brlDate;

    if (!brlDate || brlDate.length !== 10 || brlDate.includes('_')) return '';

    const [day, month, year] = brlDate.split('/');
    return `${year}-${month}-${day}`;
};

export const applyDateMask = (value: string): string => {
    let maskedValue = value.replace(/\D/g, '');

    if (maskedValue.length > 2) {
        maskedValue = maskedValue.substring(0, 2) + '/' + maskedValue.substring(2);
    }
    if (maskedValue.length > 5) {
        maskedValue = maskedValue.substring(0, 5) + '/' + maskedValue.substring(5);
    }

    return maskedValue.substring(0, 10);
};