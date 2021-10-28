import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// localStorage 에 저장하고싶을때

// import storageSession from 'redux-persist/lib/storage/session';
// sessionStorage 에 저장하고 싶을때

import { persistReducer } from 'redux-persist';
import counter from "./counter";


const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    // reducer 중에 whitelist에 포함된 reducer만 localstorage에 저장합니다.
    whitelist: ["counter"],
    // blacklist -> 그것만 제외합니다
    blacklist: []
};

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    // index: (state = {}, action) => {
    //     switch (action.type) {
    //         default:
    //             return state;
    //     }
    // },
    counter
});

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
