import React, { lazy, ReactNode} from 'react';
import Page404 from '../pages/page404';

const Login = lazy(() => import('../pages/Login'))
const AdminList = lazy(() => import('../pages/admin/AdminList'))
const RoleList = lazy(() => import('../pages/role/RoleList'))
const FirstIndex = lazy(() => import('../pages/FirstIndex'))


export interface Iroute {
    title: string,
    path: string,
    exact?: boolean
    component?: ReactNode
    children?: Iroute[]
}
export const router: Iroute[] = [
    {
        title:'首页管理',
        path: '/dashboard',
        // exact:true,
        children: [
            {
                title:'仪表管理',
                path: '/indexManage',
                component: <FirstIndex/>,
                exact:true,
            }
        ]
    },
    {
        title:'人员管理',
        path: '/personManage',
        // exact:true,
        children: [
            {
                title:'人员管理1',
                path: '/adminManage',
                component: <AdminList/>,
                exact:true
            }
        ]
    },
    {
        title:'角色管理',
        path: '/roleManage',
        // exact:true,
        children: [
            {
                title:'角色管理1',
                path: '/roleManage1',
                component: <RoleList/>,
                exact:true
            }
        ]
    }
]

export const unAuthRouter:Iroute[] = [
    {
        title:'登录',
        path: '/login',
        component: <Login/>,
        exact:true,
    },
    {
        title:'page404',
        path: '*',
        component: <Page404/>,
        exact:true
    },
]
