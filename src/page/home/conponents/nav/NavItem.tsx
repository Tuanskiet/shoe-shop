import { MenuItem } from '../../../../config/initMenu';
import './style/navItem.scss';

interface NavItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    data: MenuItem;
}

const NavItem = ({ data, className }: NavItemProps) => {
    const { title, childNav } = data;

    return (
        <div className="parent-nav mx-[10px] cursor-pointer">
            <div className={`${className ?? ''}`}>{title}</div>
            {childNav && (
                <div className="child-nav hidden flex-col absolute bg-white p-4 gap-3 mt-2 rounded-md shadow-md">
                    {childNav.map((item: MenuItem) => {
                        return <NavItem data={item} key={item.activeKey} className="" />;
                    })}
                </div>
            )}
        </div>
    );
};

export default NavItem;
