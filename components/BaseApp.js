import {AppFooter, FullAppHeader} from "./App";
import React from "react";


export default class BaseApp
{
    render() {
        return (
            <div>
                <FullAppHeader />
                {this.props.main}
                <AppFooter />
            </div>
        );
    }
}