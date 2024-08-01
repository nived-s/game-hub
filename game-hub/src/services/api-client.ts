import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7f27de04b06a42bd9f3f87baccc049b2'
    }
})