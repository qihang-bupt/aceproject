import request from '../utils/request'


export const getUserList = (page=1) => {
    return request({
        url:"/getUserList"
    })
}

export const getRoleList = (page=1) => {
    return request({
        url:"/getRoleList"
    })
}