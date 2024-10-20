import { Tabs, TabsProps } from 'antd';
import { useState } from 'react';
import { useTabContext } from '../../context/tabContext';
import PrimaryButton from '../button/PrimaryButton';
import { TabChild1, TabChild2 } from '../tab/TabChild';
import './home.scss';
import { IconUtils } from '../../utils/IconUtils';
import classNames from 'classnames';
import Content from '../content/Content';
import AnchorCus from '../content/Anchor';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const { activeTab } = useTabContext();

    const handleOnClick = (onSuccess: () => void) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        onSuccess();
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

    const prefixCls = 'btn';

    const cls = classNames({
        [`${prefixCls}-status-success`]: true,
        [`${prefixCls}-status-error`]: true,
    });

    return (
        <div className="m-[50px]">
            <PrimaryButton
                loading={loading}
                onClick={handleOnClick}
                block
                className={cls}
                type="primary"
                ghost={true}
                icon={IconUtils.download}
                iconcustom={IconUtils.arrowUp}
                classnamecus={{ icon: 'icon-custom' }}
            >
                Click me!
            </PrimaryButton>
            <Tabs activeKey={activeTab} items={items} onChange={onChangeTab} tabBarStyle={{ display: 'none' }} />
            <Content />
            <AnchorCus />
        </div>
    );
};

export default Home;
