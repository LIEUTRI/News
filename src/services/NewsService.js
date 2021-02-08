import axios from "axios";

const NEWS_URL = 'https://news-lieutri.herokuapp.com/news';

class NewsService {
    getNewses(curPage, limit){
        if (curPage == null || limit == null) return axios.get(NEWS_URL);
        else return axios.get(NEWS_URL + "?page="+curPage+"&limit="+limit);
    }

    getNews(id){
        return axios.get(NEWS_URL + "/" + id);
    }

    addNews(data){
        return axios({
            method: 'post',
            url: NEWS_URL,
            data: data
        });
    }
}

export default new NewsService();