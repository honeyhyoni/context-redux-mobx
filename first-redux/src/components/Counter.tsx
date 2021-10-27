import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../reducer";
import {decrease, increase} from "../reducer/counter";

const Counter = (): JSX.Element => {
    const { count } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => {
        dispatch(increase(count));
    },[count, dispatch]);

    const onDecrease = useCallback(() => {
        dispatch(decrease(count));
    }, [count, dispatch])

    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <span>{count}</span>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;
