import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();


const enhancer =
    process.env.NODE_ENV === "production"
        ? compose(applyMiddleware(sagaMiddleware))
        : composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
    reducer,
    enhancer
);

sagaMiddleware.run(rootSaga);

export default store;
