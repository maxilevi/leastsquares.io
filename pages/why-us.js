import * as React from "react";
import SectionSeparator from "../components/SectionSeparator";
import InterestedInLearningMore from "../components/InterestedInLearningMore";
import SmallHero from "../components/SmallHero";
import BaseApp from "../components/BaseApp";
import LeftFeatureContent, {RightFeatureContent} from "../components/FeatureContent";
import {DefaultFeaturePage} from "./services";
import BackgroundWithText from "../components/BackgroundWithText";

export default function WhyUs()
{
    return(
        <BaseApp
            title="Why us"
            main={
                <div>
                    <SmallHero
                        title="Why us"
                        description="We translate your idea into meaningful impact for you and your audience."
                        sourceImage="assets/illustrations/whyus.svg"
                    />
                    <BackgroundWithText
                        title="Title"
                        description="Description"
                        padding={0}
                        element={<div/>}
                    />
                    <DefaultFeaturePage
                        columns={
                            <div>
                                <LeftFeatureContent
                                    title="Always at your service"
                                    description="From research to vision to implementation we can translate ideas into fully working products."
                                />
                                <RightFeatureContent
                                    title="Full-service, full-stack"
                                    description="Everything under one roof means less risk and a cohesive team to ensure forward momentum."
                                />
                                <LeftFeatureContent
                                    title="Bleeding-edge, razor-sharp software"
                                    description="Description"
                                />
                            </div>
                        }
                    />
                    <SectionSeparator size={6} />
                    <InterestedInLearningMore />
                    <SectionSeparator size={8} />
                </div>
            }
        />
    );
}