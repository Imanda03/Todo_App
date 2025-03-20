import { colors } from "./color";

export const getTodayDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };

    return today.toLocaleDateString('en-US', options)
}


export const priorities = [
    { label: 'Low', value: 'low', color: colors.LOW_PRIORITY },
    { label: 'Medium', value: 'medium', color: colors.MEDIUM_PRIORITY },
    { label: 'High', value: 'high', color: colors.HIGH_PRIORITY },
];

export const getId = () => {
    const time = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 99);

    return `${randomNumber}${time}`
}

export const getBackgroundColor = (status?: string) => {
    if (status === 'low') {
        return colors.LOW_PRIORITY
    }

    if (status === 'medium') {
        return colors.MEDIUM_PRIORITY
    }

    if (status === 'high') {
        return colors.HIGH_PRIORITY
    }

    return colors.PRIMARY_BLUE
}
