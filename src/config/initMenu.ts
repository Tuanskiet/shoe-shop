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
        title: 'Nam',
        activeKey: 'men',
        url: '/',
        childNav: [
            {
                title: 'Hunter',
                activeKey: 'page-1',
                url: '/portfolio-detail',
            },
            {
                title: 'Sandal',
                activeKey: 'page-2',
                url: '/blog-grids',
            },
            {
                title: 'Giày thể thao',
                activeKey: 'page-3',
                url: '/blog-details',
            },
        ],
    },
    about: {
        title: 'Nữ',
        activeKey: 'women',
        url: '/women',
        childNav: [
            {
                title: 'Hunter',
                activeKey: 'page-1',
                url: '/portfolio-detail',
            },
            {
                title: 'Sandal',
                activeKey: 'page-2',
                url: '/blog-grids',
            },
            {
                title: 'Giày thể thao',
                activeKey: 'page-3',
                url: '/blog-details',
            },
        ],

    },
    service: {
        title: 'Bé trai',
        activeKey: 'boys',
        url: '/boys',
        childNav: [
            {
                title: 'Sandal',
                activeKey: 'page-2',
                url: '/blog-grids',
            },
            {
                title: 'Giày thể thao',
                activeKey: 'page-3',
                url: '/blog-details',
            },
        ],
    },
    pricing: {
        title: 'Bé gái',
        activeKey: 'girls',
        url: '/girls',
        childNav: [
            {
                title: 'Sandal',
                activeKey: 'page-2',
                url: '/blog-grids',
            },
            {
                title: 'Giày thể thao',
                activeKey: 'page-3',
                url: '/blog-details',
            },
        ],
    },
    page: {
        title: 'Teen',
        activeKey: 'teen',
        childNav: [
            {
                title: 'Sandal',
                activeKey: 'page-2',
                url: '/blog-grids',
            },
            {
                title: 'Giày thể thao',
                activeKey: 'page-3',
                url: '/blog-details',
            },
        ],
    },
    contact: {
        title: 'Phụ kiện',
        activeKey: 'accessory',
        url: '/accessory',
        childNav: [
            {
                title: 'Sandal',
                activeKey: 'page-2',
                url: '/blog-grids',
            },
            {
                title: 'Giày thể thao',
                activeKey: 'page-3',
                url: '/blog-details',
            },
        ],
    },
    sale: {
        title: 'Sale off',
        activeKey: 'accessory',
        url: '/accessory',
        childNav: [
            {
                title: 'Sandal',
                activeKey: 'page-2',
                url: '/blog-grids',
            },
            {
                title: 'Giày thể thao',
                activeKey: 'page-3',
                url: '/blog-details',
            },
        ],
    },
};
