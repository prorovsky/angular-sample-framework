import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Films',
        icon: 'glyphicon-film',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'Matrix',
                        icon: 'glyphicon-film',
                        route: '/authenticated/film-detail/4/details',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-film',
                route: '/authenticated/film-list/3',
                submenu: null
            },
            {
                text: 'Top 5',
                icon: 'glyphicon-film',
                route: '/authenticated/film-list/5',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-film',
                route: '/authenticated/film-list/0',
                submenu: null
            }
        ]
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Film List',
                icon: 'glyphicon-th-list',
                route: '/authenticated/film-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: '/authenticated/settings',
                submenu: null
            }
        ]
    }
];