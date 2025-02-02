import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2f4e95dd16c345b08c88a45442b64381'
    }
})