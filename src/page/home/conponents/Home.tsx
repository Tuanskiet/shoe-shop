import { Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { HomeContextProvider, useHomeContext } from '../../../context/homeContext';
import { setHeader } from '../../../store/store';
import '../styles/home.scss';
import Banner from './banner/Banner';
import NavBar from './nav/NavBar';
import ProductList from './product/ProductList';
const Home = () => {
    const [loading, setLoading] = useState(false);
    // const { activeTab } = useTabContext();
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

    const breadCrumbs = [
        {
            title: 'Trang chủ',
        },
        {},
        {
            title: 'Danh mục',
        },
        {
            title: 'Nam',
        },
    ];

    return (
        <HomeContextProvider>
            <NavBar />
            <div className="container mx-auto mb-2">
                <Breadcrumb items={breadCrumbs} />
            </div>
            <Banner />
            <ProductList />
        </HomeContextProvider>
    );
};

export default Home;
