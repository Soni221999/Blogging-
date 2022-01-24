import axios from 'axios';

const BLOGGER_API_BASE_URL = "http://localhost:8080/api";

class UserService {

    getUsers(){
        return axios.get('http://localhost:8080/api/getUsers');
    }

    createUser(c){
        return axios.post('http://localhost:8080/api/addUsername', c);
    }

    getUserById(uid){
        return axios.get('http://localhost:8080/api/getUsername/'+uid);
    }

    updateUser(u){
        return axios.put('http://localhost:8080/api/updateUsername',u);
    }

    deleteUser(uid){
        return axios.delete('http://localhost:8080/api/deleteUsername/'+ uid);
    }
}

export default new  UserService()
