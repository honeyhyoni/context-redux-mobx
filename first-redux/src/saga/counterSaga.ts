import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
    INCREASE_REQUEST,
    INCREASE_SUCCESS,
    INCREASE_FAIL
} from "../reducer/counter";
import axios, {AxiosResponse} from "axios";

function getIncreaseAPI(data: any) {
    return axios.get('/test', data)
}

function * getIncrease (action: any) {
    try {
        const result: AxiosResponse<any> = yield call(getIncreaseAPI, action.params);
        yield put({type: INCREASE_SUCCESS, data: result})
    } catch (e: any) {
        yield put({type: INCREASE_FAIL, data: e.response.data})
    }
}

function * watchIncrease() {
    yield takeLatest(INCREASE_REQUEST, getIncrease)
}

export default function * counterSaga () {
    yield all([fork(watchIncrease)])
}
