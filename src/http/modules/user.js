import axiosInstance from "@/http/axios";

/**
 * 用户管理模块
 */

/**
 * 保存用户
 * @param data
 * @returns {*}
 */
export const save = (data) => {
    return axiosInstance({
        url: 'user/save',
        method: 'POST',
        data: data
    })
}

/**
 * 删除用户模块
 * @param data
 * @returns {*}
 */
export const userDelete = (data) => {
    return axiosInstance({
        url: 'user/delete',
        method: 'POST',
        data: data
    })
}

export const findPage = (data) => {
    return axiosInstance({
        url: 'user/findPage',
        method: 'POST',
        data: data
    })
}

export const findPermissions = (params) => {
    return axiosInstance({
        url: '/user/findPermissions',
        method: 'GET',
        data: params
    })
}
