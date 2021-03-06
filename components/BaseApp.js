import {AppFooter, FullAppHeader} from "./App";
import React from "react";


export default class BaseApp extends React.Component
{
    render()
    {
        return (
            <div>
                <FullAppHeader
                    title={this.props.title}
                    content={this.props.main}
                />
                <AppFooter />
            </div>
        );
    }
}