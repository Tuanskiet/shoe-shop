import { TabsProps } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TabChild1, TabChild2 } from '../../../components/tab/TabChild';
import { HomeContextProvider, useHomeContext } from '../../../context/homeContext';
import { setHeader } from '../../../store/store';
import '../styles/home.scss';
import NavBar from './nav/NavBar';
const Home = () => {
    const [loading, setLoading] = useState(false);
    // const { activeTab } = useTabContext();
    const { header } = useSelector((state: any) => state.header);
    const dispatch = useDispatch();

    const { activeTab } = useHomeContext();

    useEffect(() => {
        console.log('activeTab', activeTab);
    });

    const handleOnClick = (onSuccess: () => void) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        onSuccess();
        dispatch(setHeader('Title updated!'));
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Tab 1',
            children: <TabChild1 />,
        },
        {
            key: '2',
            label: 'Tab 2',
            children: <TabChild2 />,
        },
    ];

    const onChangeTab = (key: string) => {
        // alert(`Tab ${key} clicked!`);
    };

    const prefixCls = 'btn-primary';

    const cls = classNames({
        [`${prefixCls}-status-success`]: true,
        [`${prefixCls}-status-error`]: true,
    });

    return (
        <HomeContextProvider>
            {/* <div>{header}</div> */}
            <NavBar />
        </HomeContextProvider>
    );
};

export default Home;
