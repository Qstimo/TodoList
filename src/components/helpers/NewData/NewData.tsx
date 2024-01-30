import React from 'react';
export const formatDate = (date?: any): string => {
    const currentDate = date ? new Date(date) : new Date();

    return currentDate.toISOString();
};

export const formattedDateDeadline = (string: string) => {
    const date = new Date(string);
    return `${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })} ${date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit' }).split('.').reverse().join('.')}`;

}
