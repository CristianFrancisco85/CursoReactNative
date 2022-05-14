import axios from "axios";

const movieDb = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "1ca2ecaf613c07d74f7dfba072e51c9f",
        language: "es-ES"
    }
});

export default movieDb;