import axios from 'axios';

const COMMUNITY_API_BASE_URL = "http://localhost:8080/api";

class CommunityService {

    getCommunitys(){
        return axios.get("http://localhost:8080/api/getCommunitys");
    }

    createCommunity(community){
        return axios.post("http://localhost:8080/api/addCommunity", community);
    }

    getCommunityById(communityId){
        return axios.get("http://localhost:8080/api/getCommunity/"+ communityId);
    }

    updateCommunity(community){
        return axios.put("http://localhost:8080/api/updateCommunity",community);
    }

    deleteCommunity(communityId){
        return axios.delete('http://localhost:8080/api/deleteCommunity/'+ communityId);
    }
}

export default new CommunityService()