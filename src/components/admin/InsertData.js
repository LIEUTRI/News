import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import NewsService from "../../services/NewsService";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';

const myStyle = {
    marginTop: "30px",
    textAlign: "left"
}

class InsertData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            content: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.email.value});
    }

    handleCkeditorState = (event, editor) => {
        const data = editor.getData();

        this.setState({ content: data });

        console.log(data);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        const jsonData = {
            "thumbnail": data.get("thumbnail"),
            "title": data.get("title"),
            "shortDescription": data.get("shortDescription"),
            "content": this.state.content,
            "categoryCode": data.get("categoryCode")
        }

        NewsService.addNews(jsonData).then((response) => {
            let responseData = response.data;
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
    }

    render() {
        return (
            <div>
                <div style={myStyle}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="Thumbnail">Thumbnail</Label>
                            <Input type="text" name="thumbnail" id="thumbnail" placeholder="Thumbnail"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Title">Title</Label>
                            <Input type="text" name="title" id="title" placeholder="Title"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="shortDescription">Short Description</Label>
                            <Input type="textarea" name="shortDescription" id="shortDescription"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="content">Content</Label>
                            {/*<Input type="textarea" name="content" id="content"/>*/}
                            <CKEditor
                                editor={ClassicEditor}
                                data = ""
                                onReady={editor=>{
                                    console.log("init ckeditor");
                                }}
                                onChange={this.handleCkeditorState}

                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category Code</Label>
                            <Input type="text" name="categoryCode" id="categoryCode" placeholder="Category Code"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelectMulti">Select Multiple</Label>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile"/>
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default InsertData;