import axios from "axios";

export class AccountService {
    defaultRegister = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: '',
        username: '',
        password: '',
    };

    defaulLogin = {
        username: '',
        password: '',
    };

    // get user
    // getUserById = async (userId) => {
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
    //         localStorage.getItem("userToken")
    //     )}`;
    //     try {
    //         const response = await axios.get("http://localhost:8080/user/" + userId);
    //         if (response.status === 200) {
    //             if (response.data !== null) {
    //                 return response.data;
    //             }
    //             return this.defaultUser;
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         return this.defaultUser;
    //     }
    // };

    // login
    login = async (request) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/login",
                request
            );
            console.log(response.data)
        } catch (error) {
            throw error;
        }
    };

    // register
    register = async (request) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/register",
                request
            );
        } catch (error) {
            throw error;
        }
    };

    // email confirmation
    emailConfirmation = async (request) => {
        try {
            const response = await axios.post(
                "http://localhost:8080//email-confirmation",
                request
            );
        } catch (error) {
            throw error;
        }
    };

    // update last chat id
    // updateLastChatId = async (userId, chatId) => {
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
    //         localStorage.getItem("userToken")
    //     )}`;
    //     try {
    //         const response = await axios.put(
    //             `http://localhost:8080/user/updateLastChatId/${userId}/${chatId}`
    //         );

    //         return response.data;
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };
}
