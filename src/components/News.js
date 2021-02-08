import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from "react-router-dom";

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Tin tức</h1>
                {
                    this.props.newsList.map((news, index) => (
                        <div key={index} style={{width: '100%'}}>
                            <div style={{textAlign: "left"}}>
                                <Card>
                                    <CardImg top width="100%"
                                             src={news.thumbnail}
                                             alt={news.title}/>
                                    <CardBody>
                                        <CardTitle tag="h5">{news.title}</CardTitle>
                                        <CardSubtitle tag="h6"
                                                      className="mb-2 text-muted">{news.categoryName}</CardSubtitle>
                                        <CardText><span style={{width: "100%", height: 100}}>
                                            <i>{news.shortDescription}</i></span></CardText>
                                        <Button style={{backgroundColor: "blue"}}><Link className="btn-link" to={"news/"+news.id}>Đọc tiếp</Link></Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <br/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default News;