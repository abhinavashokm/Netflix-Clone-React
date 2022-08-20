import axios from "axios";
import {baseUrl} from '../src/constants/constants'

const instance = axios.create({
    baseURL: baseUrl,
  });

export default instance ; 