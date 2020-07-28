import React from "react";
import BackgroundWithText from "../components/BackgroundWithText";
import BaseApp from "../components/BaseApp";
import SmallHero from "../components/SmallHero";
import SectionSeparator from "../components/SectionSeparator";
import InterestedInLearningMore from "../components/InterestedInLearningMore";
import LeftFeatureContent, {RightFeatureContent} from "../components/FeatureContent";
import BackgroundPattern from "../components/BackgroundPattern";

export function DefaultFeaturePage(props)
{
    return (
        <div className="overflow-hidden">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>

                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                    {props.columns}
                </div>
            </div>
        </div>
    );
}


function FeatureContent()
{
    return (
        <DefaultFeaturePage
            columns={
                <div>
                    <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                         width="404" height="784" fill="none" viewBox="0 0 404 784">
                        <defs>
                            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"
                                     patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"/>
                    </svg>
                    <BackgroundPattern
                        leftClass="absolute left-full transform translate-x-1/2"
                        rightClass="absolute right-full bottom-0 transform -translate-x-1/2"
                    />
                    <RightFeatureContent
                        title="Full-stack web development"
                        description="Leverage modern front-end and back-end frameworks to create a unique experience for your users. We can build together a new webapp from scratch or work on an existing codebase."
                        srcImage="assets/illustrations/full-stack.svg"
                    />
                    <LeftFeatureContent
                        title="Mobile & Desktop applications"
                        description="Provide the best user experience and accessibility to your customers and users with Android, iPhone and Tablets applications that integrate with your existing systems."
                        srcImage="assets/illustrations/apps.svg"
                    />
                    <RightFeatureContent
                        title="Low-level applications"
                        description="Need blazing fast, memory safe software? Our team can develop in C, C++, NASM and Rust."
                        srcImage="assets/illustrations/low-level.svg"
                    />
                    <LeftFeatureContent
                        title="Game Development"
                        description="We are knowledgeable in Unity, UE4 and Graphics Programming. We can help you create your own engine from scratch or use an existing engine to build the game."
                        srcImage="assets/illustrations/game-development.svg"
                    />
                    <RightFeatureContent
                        title="Machine Learning"
                        description="Looking to solve a regression or a classification problem? Our team can leverage it's knowledge in Data Science to find a solution to your problem."
                        srcImage="assets/illustrations/machine-learning.svg"
                    />
                    <LeftFeatureContent
                        title="Process Automation"
                        description="We can help you automate your business processes so you focus on the product and enjoy increased productivity."
                        srcImage="assets/illustrations/process-automation.svg"
                    />
                </div>
            }
        />
    );
}


export default function Blog()
{
    return (
        <BaseApp
            title="What we do"
            main={
                <div>
                    <SmallHero
                        title="What we do"
                        description="We aren't bound to a single industry. We adapt and learn fast which allows us to work exceptionally well in a range of different fields."
                        sourceImage="assets/illustrations/whatwedo.svg"
                    />
                    <SectionSeparator size={1} />
                    <BackgroundWithText
                        title="We create solutions for your problems."
                        description="We can tackle any challenge."
                        padding={0}
                        element={<div/>}
                        hidePatterns={true}
                    />
                    <FeatureContent />
                    <SectionSeparator size={6} />
                    <InterestedInLearningMore />
                    <SectionSeparator size={8} />
                </div>
            }
        />
    );
}