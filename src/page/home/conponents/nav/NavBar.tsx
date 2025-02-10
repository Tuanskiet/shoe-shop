import SvgImage from '../../../../components/image/SvgImage';
import { MENU, MenuItem } from '../../../../config/initMenu';
import Account from './Account';
import Cart from './Cart';
import NavItem from './NavItem';
import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <div className="container-app flex justify-between items-center">
            <div className="nav-logo cursor-pointer py-[1.5rem] w-[15rem]">
                <SvgImage width={174} height={30} />
            </div>

            <div className="nav-wrapper flex justify-between items-center px-[1rem] w-full">
                <div className="nav-items flex justify-between items-center">
                    {MENU &&
                        Object.values(MENU).map((item: MenuItem) => {
                            return <NavItem data={item} key={item.activeKey} />;
                        })}
                </div>

                <div className="nav-action flex justify-between items-center gap-2">
                    <SearchBar />
                    <Account />
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
