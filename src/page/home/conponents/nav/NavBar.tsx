import { MENU, MenuItem } from '../../../../config/initMenu';
import SvgImage from '../../../../components/image/SvgImage';
import NavItem from './NavItem';
import PrimaryButton from '../../../../components/button/PrimaryButton';

const NavBar = () => {
    return (
        <div className="container-app flex justify-between items-center">
            <div className="nav-logo cursor-pointer py-[2rem] w-[15rem]">
                <SvgImage width={174} height={38} />
            </div>

            <div className="nav-wrapper flex justify-between items-center px-[1rem] w-full">
                <div className="nav-items flex justify-between items-center">
                    {MENU &&
                        Object.values(MENU).map((item: MenuItem) => {
                            return <NavItem data={item} key={item.activeKey} />;
                        })}
                </div>

                <PrimaryButton colortype="red">Get a Quote</PrimaryButton>
            </div>
        </div>
    );
};

export default NavBar;
