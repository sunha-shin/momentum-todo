import {GlobalStyle} from "./styled/GlobalStyle";
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <Router>
            <GlobalStyle/>
            <App/>
        </Router>
    </Provider>,
);