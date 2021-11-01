import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeBoolean, getUsersThunk, setBoolean} from '../reducer/checkToolkit';
import {RootState} from "../store";

const Counter = (): JSX.Element => {
    const { check } = useSelector((state: RootState) => state.check);
    const { users } = useSelector((state: RootState) => state.check);
    const dispatch = useDispatch();

    const changeCheck = useCallback(() => {
        console.log('come?')
        dispatch(setBoolean({check: !check}))
    },[check, dispatch]);

    const changeBooleans = useCallback(() => {
        dispatch(changeBoolean());
    },[dispatch, check]);

    const getUserArray = useCallback(() => {
        dispatch(getUsersThunk())
    },[dispatch, users])

    return (
        <div>
            <button onClick={changeCheck}>change check</button>
            <button onClick={changeBooleans}>change check</button>
            <div>{check ? 'true': 'false'}</div>
            <button onClick={getUserArray}>get users</button>
            {users && users.map((ele, ind) => (
                <div key={ind}>{ele}</div>
            ))}
        </div>
    )
}

export default Counter;
