import { all, fork, put, delay, takeLatest } from "redux-saga/effects";
import {
    INCREASE_REQUEST,
    INCREASE_SUCCESS,
    INCREASE_FAIL
} from "../reducer/counter";
import axios from "axios";

function getIncreaseAPI(data: any) {
    return axios.get('/test', data)
}

function * getIncrease (action: any) {
    try {
        console.log(action,'action')
        const result = {
            count: action.count + 1
        }
        yield delay(100)
        yield put({type: INCREASE_SUCCESS, data: result})
    } catch (e: any) {
        const errorTempData = {
            count: -1
        }
        console.log(e);
        yield put({type: INCREASE_FAIL, data: errorTempData})
    }
}

function * watchIncrease() {
    yield takeLatest(INCREASE_REQUEST, getIncrease)
}

export default function * counterSaga () {
    yield all([fork(watchIncrease)])
}
