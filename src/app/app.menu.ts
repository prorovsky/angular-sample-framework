import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'dashboard',
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
                        route: 'film-detail/Matrix',
                        submenu: null
                    },
                    {
                        text: 'Terminator',
                        icon: 'glyphicon-film',
                        route: 'film-detail/Terminator',
                        submenu: null
                    },
                    {
                        text: 'Robocop',
                        icon: 'glyphicon-film',
                        route: 'film-detail/Robocop',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-film',
                route: 'film-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-film',
                route: 'film-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-film',
                route: 'film-list/0',
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
                route: 'film-maint',
                submenu: null   
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'settings',
                submenu: null
            }
        ]
    }
];