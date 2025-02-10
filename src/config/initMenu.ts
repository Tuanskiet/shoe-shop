export interface MenuItem {
    title: string;
    activeKey: string;
    url?: string;
    childNav?: MenuItem[];
}

type Menu = {
    [key: string]: MenuItem;
};

export const MENU: Menu = {
    home: {
        title: 'Home',
        activeKey: 'home',
        url: '/',
    },
    about: {
        title: 'About',
        activeKey: 'about',
        url: '/about',
    },
    service: {
        title: 'Services',
        activeKey: 'service',
        url: '/service',
    },
    pricing: {
        title: 'Pricing',
        activeKey: 'pricing',
        url: '/pricing',
    },
    page: {
        title: 'Page',
        activeKey: 'page',
        childNav: [
            {
                title: 'Portfolio Details Page',
                activeKey: 'page-1',
                url: '/portfolio-detail',
            },
            {
                title: 'Blog Grids Page',
                activeKey: 'page-2',
                url: '/blog-grids',
            },
            {
                title: 'Blog Deatails Page',
                activeKey: 'page-3',
                url: '/bolg-details',
            },
        ],
    },
    contact: {
        title: 'Contact',
        activeKey: 'contact',
        url: '/contact',
    },
};
