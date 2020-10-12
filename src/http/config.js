import {baseUrl} from "@/utils/global";

export default {
    method: 'GET',

    baseUrl: baseUrl,

    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },

    timeout: 10000,

}
