import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import './App.css';
import { THEME_ANTD } from './config/themeAntd';
import { TabProvider } from './context/tabContext';
import Home from './page/home/conponents/Home';
import store from './store/store';
import './styles/globals.scss';

function App() {
    return (
        <Provider store={store}>
            <ConfigProvider theme={THEME_ANTD}>
                <TabProvider>
                    <Home />
                </TabProvider>
            </ConfigProvider>
        </Provider>
    );
}

export default App;
