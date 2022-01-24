import axios from 'axios';

const POST_API_BASE_URL = "http://localhost:8080/api";

class PostService {

    getPosts(){
        return axios.get('http://localhost:8080/api/getPosts');
    }

    createPost(post){
        return axios.post('http://localhost:8080/api/addPost', post);
    }

    getPostById(postId){
        return axios.get('http://localhost:8080/api/getPost/'+postId);
    }

    updatePost(post){
        return axios.put('http://localhost:8080/api/updatePost',post);
    }

    deletePost(postId){
        return axios.delete('http://localhost:8080/api/deletePost/'+ postId);
    }
}

export default new PostService()