import React from 'react'

export default class SectionSeparator extends React.Component
{
    render()
    {
        var size = this.props.size ?? 1;
        var elements = [];
        for (var i = 0; i < this.props.size; ++i)
        {
            elements.push(<br/>);
        }
        return (
            <div>
                {elements}
            </div>
        );
    }
}