import { combineReducers } from 'redux';
import counter from "./counter";

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            default:
                return state;
        }
    },
    counter
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
