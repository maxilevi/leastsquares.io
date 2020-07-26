import React from "react";
import {PortfolioText, ViewEntirePortfolioButton} from "./Portfolio";

export default class InterestedInLearningMore extends React.Component
{
    render()
    {
        return (
            <div>
                <PortfolioText title="Interested in learning more?" description="Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one." />
                <ViewEntirePortfolioButton text={'Contact us'} url={'contact'} />
            </div>
        );
    }
}