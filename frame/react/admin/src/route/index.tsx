import React, { lazy, ReactNode} from 'react';
import Page404 from '../pages/page404';

const Login = lazy(() => import('../pages/Login'))
const AdminList = lazy(() => import('../pages/admin/AdminList'))
const RoleList = lazy(() => import('../pages/role/RoleList'))
const UserList = lazy(() => import('../pages/user/UserList'))

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
        path: '/user',
        // exact:true,
        children: [
            {
                title:'用户管理',
                path: '/userManage',
                component: <UserList/>,
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
