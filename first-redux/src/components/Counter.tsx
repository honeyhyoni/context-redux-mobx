import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../reducer";
import {decrease, getIncreaseSaga, increase} from "../reducer/counter";

const Counter = (): JSX.Element => {
    const { count } = useSelector((state: RootState) => state.counter);
    const { test } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => {
        dispatch(increase(count));
    },[count, dispatch]);

    const onDecrease = useCallback(() => {
        dispatch(decrease(count));
    }, [count, dispatch])

    const sagaIncrease = useCallback(()=>{
        dispatch((getIncreaseSaga(count)))
    },[count, dispatch])

    return (
        <div>
            {
                !test ?
                <>
                    <button onClick={onIncrease}>+</button>
                    <span>{count}</span>
                    <button onClick={onDecrease}>-</button>
                    <br/>
                    <button onClick={sagaIncrease}>+</button>
                </>
                    :
                    <div>loading</div>
            }
        </div>
    )
}

export default Counter;
