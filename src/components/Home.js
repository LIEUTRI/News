import React from 'react';
import {PaginationItem, PaginationLink} from 'reactstrap';
import NewsComponent from "./News";
import NewsService from "../services/NewsService";
import Paging from "./Paging";
import Header from "./Header";
import Footer from "./Footer";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            limit: 4,
            curPage: 1,
            totalPage: 0,
            visiblePage: 3,
            items: []
        }
    }

    componentDidMount() {
        this.xuly(this.state.curPage, this.state.limit, this.state.visiblePage);
    }

    xuly(curPage, limit, visiblePage) {
        NewsService.getNewses(curPage, limit).then((response) => {
            let responseData = response.data;

            // paging
            let totalPage = responseData.totalPage; // total page
            let items = [];
            let offset = (curPage === 1) || (totalPage === visiblePage) ? 1 : (curPage - 1);
            let end = totalPage >= visiblePage ? visiblePage : totalPage;
            console.log("Paging > totalPage=" + totalPage + ", visiblePage=" + visiblePage + ", offset=" + offset + ", end=" + end);

            for (let number = offset; number <= end; number++) {
                items.push(
                    <PaginationItem key={number} active={number === curPage}
                                    onClick={() => this.onChangePageNumber(number)}>
                        <PaginationLink last>
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                );
            }

            this.setState({
                newsList: responseData.listResult,
                totalPage: totalPage,
                items: items
            })
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
    }

    onChangePageNumber(page) {
        console.log("body called, news:=" + this.state.newsList.length);

        if (page === 0) {
            page = this.state.curPage < this.state.totalPage ? (this.state.curPage + 1) : this.state.curPage;
        } else if (page === -1) {
            page = this.state.curPage > 1 ? (this.state.curPage - 1) : this.state.curPage
        } else if (page === -2) {
            page = this.state.totalPage;
        }

        this.setState({curPage: page})

        this.xuly(page, this.state.limit, this.state.visiblePage);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                {/*Heading Row*/}
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="https://placehold.it/900x400" alt=""/>
                    </div>
                    {/*/.col-lg-8*/}
                    <div className="col-lg-5 text-center">
                        <h1 className="font-weight-light">Liễu Minh Trí</h1>
                        <p>Là một Fresher Java DEV, tôi yêu thích ngôn ngữ lập trình Java. Tôi vừa tốt nghiệp Đại học
                            trường Đại học Cần Thơ chuyên ngành Công nghệ thông tin.</p>
                        <button className="btn btn-primary">Tìm hiểu thêm</button>
                    </div>
                    {/*/.col-md-4*/}
                </div>
                {/*/.row*/}

                {/*Call to Action Well*/}
                <div className="card text-white bg-secondary my-5 py-4 text-center">
                    <div className="card-body">
                        <p className="text-white m-0"><span style={{fontSize: 30}}><b>Happy New Year 2021</b></span></p>
                    </div>
                </div>

                <NewsComponent newsList={this.state.newsList}/>

                <Paging items={this.state.items}
                        curPage={this.state.curPage}
                        totalPage={this.state.totalPage}
                        changePage={this.onChangePageNumber.bind(this)}/>

                <Footer/>
            </div>
        );
    }
}

export default Home;