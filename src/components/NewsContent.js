import React, {Component} from 'react';
import NewsService from "../services/NewsService";

class NewsContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: {}
        }
    }

    componentDidMount() {
        NewsService.getNews(this.props.match.params.id).then((response) => {
            let responseData = response.data;
            console.log("data: "+responseData.title);
            this.setState({ news: responseData })
        })
    }

    showNews(news){
        return (
            <div>
                <h3>{news.title}</h3>
                <p>{news.content}</p>
            </div>
        );
    }

    render() {
        return (
            <div style={{marginTop: "20px"}}>
                {this.showNews(this.state.news)}
            </div>
        );
    }
}

export default NewsContent;