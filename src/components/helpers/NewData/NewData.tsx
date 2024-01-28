import React from 'react';
export const formatDate = (date?: any): string => {
    const currentDate = date ? new Date(date) : new Date();

    return currentDate.toISOString();
};