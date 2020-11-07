import React from "react";
import BackgroundWithText from "../../components/BackgroundWithText";
import BaseApp from "../../components/BaseApp";

export default class Privacy extends React.Component {

    render()
    {
        return (
            <div>
                <BaseApp
                    title="Privacy Policy"
                    main={
                        <BackgroundWithText
                            title="Mercado Libre Synchronizer Privacy Policy"
                            description=""
                            element={
                                <div className="prose prose-lg text-gray-500 mx-auto">
                                    <p>
                                        Mercado Libre Synchronizer "the App” provides product synchronization between Mercado Libre and Shopify "the Service" to merchants who use Shopify to power their stores. This Privacy Policy describes how personal information is collected, used, and shared when you install or use the App in connection with your Shopify-supported store.
                                    </p>
                                    <b>Personal Information the App Collects</b>
                                    <p>
                                        When you install the App, we are automatically able to access certain types of information from your Shopify account:
                                        <ul>
                                            <li>Your products</li>

                                            <li> Your stock locations</li>
                                        </ul>
                                        Additionally, we collect the following types of personal information from you and/or your customers once you have installed the App:
                                        <ul>
                                        <li>
                                            Information about you and others who may access the App on behalf of your store, such as your name, address, email address, phone number, and billing information;
                                        </li>
                                        <li>
                                            Information about individuals who visit your store, such as their IP address, web browser details, time zone, and information about the cookies installed on the particular device.
                                        </li>
                                        </ul>
                                        We collect personal information directly from the relevant individual, through your Shopify account, or using the following technologies: “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org. “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps. “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
                                    </p>
                                        <b>How Do We Use Your Personal Information?</b>
                                    <p>
                                        We use the personal information we collect from you and your customers in order to provide the Service and to operate the App. Additionally, we use this personal information to: Communicate with you; Optimize or improve the App; and Provide you with information or advertising relating to our products or services.
                                    </p>
                                        <b>Sharing Your Personal Information</b>
                                    <p>
                                        We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                                    </p>
                                    <p>
                                        <b>Your Rights</b>
                                    </p>
                                    <p>
                                        If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
                                        Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
                                        Data Retention When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                                    </p>
                                    <b>Changes</b>
                                    <p>
                                        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                                        Contact Us For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href={"mailto:support@leastsquares.io"}>support@leastsquares.io</a>
                                    </p>
                                </div>
                            }
                        />
                    }
                />
            </div>
        );
    }
}