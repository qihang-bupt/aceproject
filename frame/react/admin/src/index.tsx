import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';
import { Provider } from 'mobx-react';
import store from '../src/store'

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
