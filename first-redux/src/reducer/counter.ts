export const INCREASE = 'Count/Increase' as const;
export const DECREASE = 'Count/Decrease' as const;

export const INCREASE_REQUEST = 'Count/increase/request';
export const INCREASE_SUCCESS = 'Count/increase/success';
export const INCREASE_FAIL = 'Count/increase/fail';

const initState: Record<string, any> = {
    count: 0,
    test: false
}

export const increase = (count: number) => ({ type: INCREASE, count });
export const decrease = (count: number) => ({ type: DECREASE, count });

export const getIncreaseSaga = (params: Record<string, any>) => {
    console.log(params,'params')
    return {
        type: INCREASE_REQUEST,
        count: params
    }
};

const counter = (state = initState, action: Record<string, any>) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                count: action.count + 1
            };
        case DECREASE:
            return {
                ...state,
                count: action.count - 1
            };
        case INCREASE_REQUEST:
            return {
                ...state,
                test: true,
            }
        case INCREASE_SUCCESS:
            return {
                test: false,
                count: Number(action.data.count)
            }
        case INCREASE_FAIL:
            return {
                test: false,
                count: 0
            }
        default:
            return state;
    }
}

//todo saga check
export default counter;
