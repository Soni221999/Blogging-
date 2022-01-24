import axios from 'axios';

const BLOGGER_API_BASE_URL = "http://localhost:8080/api";

class BloggerService {

    getBloggers(){
        return axios.get('http://localhost:8080/api/getBloggers');
    }

    createBlogger(blogger){
        return axios.post('http://localhost:8080/api/addBlogger', blogger);
    }

    getBloggerById(userId){
        return axios.get('http://localhost:8080/api/getBlogger/'+userId);
    }

    updateBlogger(blogger){
        return axios.put('http://localhost:8080/api/updateBlogger',blogger);
    }

    deleteBlogger(userId){
        return axios.delete('http://localhost:8080/api/deleteBlogger/'+ userId);
    }
}

export default new BloggerService()