// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import store from "./store";
// import {Provider} from "react-redux";
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// 기존의 index.tsx

import React from "react";
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from './App';

const reduxPersist = persistStore(store);

const Root = () => (
    <Provider store={store}>
        <PersistGate persistor={reduxPersist} loading={null}>
            <App/>
        </PersistGate>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
