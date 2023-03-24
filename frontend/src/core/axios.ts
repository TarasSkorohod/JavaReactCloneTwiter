import axios from "axios";
import { TOKEN } from "../constants/common-constants";

axios.interceptors.request.use((config) => {
    //Токін
});

export { axios };
