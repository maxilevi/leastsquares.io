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
                        title="Because we take the weight off your shoulders."
                        description="We help you focus on the important things while we handle the rest."
                        padding={0}
                        element={<div/>}
                    />
                    <DefaultFeaturePage
                        columns={
                            <div>
                                <RightFeatureContent
                                    title="Always at your service"
                                    description="From research to vision to implementation we can translate ideas into fully working products."
                                    srcImage="assets/illustrations/create.svg"
                                />
                                <LeftFeatureContent
                                    title="Full-service, full-stack"
                                    description="Everything under one roof means less risk and a cohesive team to ensure forward momentum."
                                    srcImage="assets/illustrations/developapp.svg"
                                />
                                <RightFeatureContent
                                    title="High quality software, always"
                                    description="We make no excuses. We build forward looking maintainable software, we believe products should be bug free and resilient to future upgrades."
                                    srcImage="assets/illustrations/highquality.svg"
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