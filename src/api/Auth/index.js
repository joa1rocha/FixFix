import api from '@/api';
import RestApiModel from "@/api/Model/RestApiModel";

class Auth extends RestApiModel {
    static getResourceEndpoint() {
        return '/auth/jwt';
    }

    /**
     * @param userName
     * @param password
     * @returns {*}
     */
    static login(userName, password) {
        return api.post(`${this.getResourceEndpoint()}/token`, { userName, password })
            // .then(response => {
            //     if (response.data.accessToken) {
            //         localStorage.setItem('user', JSON.stringify(response.data));
            //     }
        
            //     return response.data;
            // });
    }
}

export default Auth;
