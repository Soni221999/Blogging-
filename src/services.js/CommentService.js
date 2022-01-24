import axios from 'axios';

const COMMENT_API_BASE_URL = "http://localhost:8080/api";

class CommentService {

     getComments(){
        return axios.get('http://localhost:8080/api/getComments');
    } 

    createComment(comment){
        return axios.post('http://localhost:8080/api/addComment', comment);
    }

    getCommentById(commentId)
    {
    return axios.get('http://localhost:8080/api/getComments/',+commentId)
    }
 
    deleteComment(commentId){
        return axios.delete('http://localhost:8080/api/deleteComment/'+ commentId);
    } 
}

export default new CommentService()