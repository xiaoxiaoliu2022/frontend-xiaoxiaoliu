import axios from "axios";
class MovieDataService {
    getAll(page = 0) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies?page=${page}`);
    }
    find(query, by = "title", page = 0) {
        return axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/v1/movies?${by}=${query}&page=${page}`
        );
    }
    getRatings() {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/ratings`);
    }
    getSingleMovie( by= "_id") {
        console.log(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/id/${by}`)
        
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/id/${by}`);
    }
    
}
export default new MovieDataService();