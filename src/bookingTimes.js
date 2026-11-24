const fallbackTimes = [ '17:00', '18:00', '19:00', '20:00', '21:00', ];

export const initializeTimes = () => {
    if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function' ) {
        return window.fetchAPI(new Date());
    }
    return fallbackTimes;
}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            if (
                typeof window !== 'undefined' &&
                typeof window.fetchAPI === 'function' &&
                action.date
            ) {
                return window.fetchAPI(new Date(action.date));
            }
            return state;
        default:
            return state;
    }
};