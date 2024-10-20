import { useTabContext } from '../../context/tabContext';
import PrimaryButton from '../button/PrimaryButton';

const TabChild1 = () => {
    const { switchToTab } = useTabContext();

    const handleOnClick = () => {
        switchToTab('2');
    };

    return (
        <>
            <div>TabChild 1</div>
            <PrimaryButton onClick={handleOnClick}>To Tab 2!</PrimaryButton>
        </>
    );
};

const TabChild2 = () => {
    const { switchToTab } = useTabContext();
    const handleOnClick = () => {
        switchToTab('1');
    };

    return (
        <>
            <div>TabChild 2</div> <PrimaryButton onClick={handleOnClick}>Back to tab 1</PrimaryButton>
        </>
    );
};

export { TabChild1, TabChild2 };
