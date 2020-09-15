import axios from "axios";

const API_URL = "https://api.pegaki.com.br/";

//const CEP = "09572300";

class PontosService 
{
    getPoints(cep) 
    {
        //passar o cep no parameter
        return axios.get(API_URL + "pontos/" + cep)
        .then(response => {
            // if (response.data.accessToken) 
            // {
            //     //usar cookie
            //     localStorage.setItem("user", JSON.stringify(response.data));
            // }

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
}

export default new PonstosService();