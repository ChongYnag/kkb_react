import React, { Component } from "react";
import TabBar from './TabBar';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }

    render() {
        return (
            <div>
                <h1>首页</h1>
                {
                    this.props.children
                }
                <TabBar />
            </div>
        );
    }
}
