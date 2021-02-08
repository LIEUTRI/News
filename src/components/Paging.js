import React from 'react';
import {
    Pagination, PaginationItem, PaginationLink
} from 'reactstrap';

class Paging extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            visiblePage: 3
        }
    }

    onChangePage(page){
        this.props.changePage(page);
        this.setState({buttonId: page})
    }

    render() {
        return (
            <div>
                <Pagination aria-label="Page navigation">
                    <PaginationItem disabled={this.props.curPage===1} onClick={() => this.onChangePage(1)}>
                        <PaginationLink first />
                    </PaginationItem>
                    <PaginationItem disabled={this.props.curPage===1} onClick={() => this.onChangePage(-1)}>
                        <PaginationLink previous />
                    </PaginationItem>

                    {this.props.items}

                    <PaginationItem disabled={this.props.curPage===this.props.totalPage} onClick={() => this.onChangePage(0)}>
                        <PaginationLink next />
                    </PaginationItem>
                    <PaginationItem disabled={this.props.curPage===this.props.totalPage} onClick={() => this.onChangePage(-2)}>
                        <PaginationLink last />
                    </PaginationItem>
                </Pagination>

            </div>
        );
    }
}

export default Paging