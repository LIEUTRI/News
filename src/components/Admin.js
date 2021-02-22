import React from "react";
import AdminHome from "./admin/Home";
import {
    Route
} from "react-router-dom";
import InsertData from "./admin/InsertData";

class Admin extends React.Component {
    render() {
        return (
            <div >
                <AdminHome/>
                <Route exact component={InsertData} path="/NewsApp/admin/add"/>
                <Route exact component={InsertData} path="/NewsApp/admin/update"/>
            </div>
        );
    }
}
export default Admin;