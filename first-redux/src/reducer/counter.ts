export const INCREASE = 'Count/Increase' as const;
export const DECREASE = 'Count/Decrease' as const;

const initState = {
    count: 0
}

export const increase = (count: number) => ({ type: INCREASE, count });
export const decrease = (count: number) => ({ type: DECREASE, count });

const counter = (state = initState, action: Record<string, any>) => {
    switch (action.type) {
        case INCREASE:
            return {
                count: action.count + 1
            };
        case DECREASE:
            return {
                count: action.count - 1
            };
        default:
            return state;
    }
}

export default counter;
