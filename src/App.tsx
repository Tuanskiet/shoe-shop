import { ConfigProvider } from 'antd';
import './App.css';
import Home from './components/home/Home';
import { THEME_ANTD } from './config/themeAntd';
import { TabProvider } from './context/tabContext';

function App() {
    return (
        <ConfigProvider theme={THEME_ANTD}>
            <TabProvider>
                <Home />
            </TabProvider>
        </ConfigProvider>
    );
}

export default App;
