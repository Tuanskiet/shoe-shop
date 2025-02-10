import { MenuItem } from '../../../../config/initMenu';

interface NavItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    data: MenuItem;
}

const NavItem = ({ data, className }: NavItemProps) => {
    const { title, childNav } = data;

    return (
        <div className="mx-[10px]">
            <div className={`${className ?? ''}`}>{title}</div>
            {childNav &&
                childNav.map((item: MenuItem) => {
                    return <NavItem data={item} key={item.activeKey} className="ml-[20px] hidden" />;
                })}
        </div>
    );
};

export default NavItem;
