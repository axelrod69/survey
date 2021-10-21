import React from "react";
import "./main_screen.css";
import Work from "./work.jpg";
import Form from "../form/form";

export default class MainScreen extends React.Component {
    render() {
        return(
            <div className="main_screen">
                <div style={{padding : "50px 0"}}>
                    <Form></Form>
                </div>
            </div>
        );
    }
}