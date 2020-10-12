import axios from 'axios'
import config from "@/http/config";
import router from "@/router";

const axiosInstance = axios.create({
    baseURL: config.baseUrl,
    headers: config.headers,
    timeout: config.timeout
})

axiosInstance.interceptors.request.use(
    config => {
        // TODO 设置token
        let token
        if (token) {
            config.headers.token = token
        } else {
            // TODO
        }
        return config
    },
    error => {
        console.log('request: ', error)
        // 判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            console.log('timeout请求超时')
        }

        const errorInfo = error.response
        console.log(errorInfo)
        if (errorInfo) {
            error = errorInfo.data
            const errorStatus = errorInfo.status; // 404 403 500 ...
            router.push({
                path: `/error/${errorStatus}`
            })
        }
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
    }
)

axiosInstance.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求错误'
                    break
                case 401:
                    error.message = '未授权, 请登录'
                    break
            }
        }
    }
)

export default axiosInstance
