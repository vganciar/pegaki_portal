import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const API_URL_PEGAKI = "https://api.pegaki.com.br/";

const email = "contato@pegaki.com.br";

const clientSecret = "83bc3861e96accc0defcae42488f5c632ec296cb335ebe3484a53405a165fd58";

class AuthService 
{
    getToken()
    {
        return axios.post(API_URL + "authentication", {
            email,
            clientSecret
        })
        .then(response => {
            if (response.data.id_token) 
            {
                localStorage.setItem("pegaki_token", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    login(username, password) 
    {
        return axios.post(API_URL + "signin", {
            username,
            password
        })
        .then(response => {
            if (response.data.accessToken) 
            {                
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    logout() 
    {
        localStorage.removeItem("user");
    }

    register (username, email, password) 
    {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService(); 