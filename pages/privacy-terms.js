import React from "react";
import {AppHeader, AppFooter} from "../components/App";
import BackgroundWithText from "../components/BackgroundWithText";

export default class PrivacyAndTerms extends React.Component {

    render()
    {
        return (
            <div>
                <AppHeader />
                <BackgroundWithText
                        title="Terms of Service"
                        description=""
                        element={
                                <div>
                                        <li>
                                                <h3>
                                                        1. Terms
                                                </h3>
                                                <p>
                                                        By accessing the website at https://leastsquares.com, you are
                                                        agreeing to be bound by these terms of service, all
                                                        applicable laws and regulations, and agree that you are
                                                        responsible for compliance with any applicable local laws.
                                                        If you do not agree with any of these terms, you are
                                                        prohibited from using or accessing this site. The materials
                                                        contained in this website are protected by applicable
                                                        copyright and trademark law.
                                                </p>
                                        </li>
                                </div>
                        }
                />
                    <main className="l-main l-main--pad terms-page">
                            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                                    <h2 className="terms-title t-new-subhead">LeastSquares Terms of Service</h2>
                                    <ol className="terms">
                                            <li className="term">
                                                    <h3 className="terms-heading t-new-body-heading">
                                                            1. Terms
                                                    </h3>
                                            </li>
                                            <li className="term">
                                                    <h3 className="terms-heading t-new-body-heading">
                                                            2. Use License
                                                    </h3>
                                                    <p className="terms-body t-new-body">
                                                            a. Permission is granted to temporarily download one copy of
                                                            the materials (information or software) on LeastSquares’s
                                                            website for personal, non-commercial transitory viewing
                                                            only. This is the grant of a license, not a transfer of
                                                            title, and under this license you may not:
                                                    </p>

                                                    <ul className="terms-list terms-list--lower-roman">
                                                            <li className="terms-list__item t-new-body">
                                                                    modify or copy the materials;
                                                            </li>
                                                            <li className="terms-list__item t-new-body">
                                                                    use the materials for any commercial purpose, or for
                                                                    any public display (commercial or non-commercial);
                                                            </li>
                                                            <li className="terms-list__item t-new-body">
                                                                    attempt to decompile or reverse engineer any
                                                                    software contained on LeastSquares’s website;
                                                            </li>
                                                            <li className="terms-list__item t-new-body">
                                                                    remove any copyright or other proprietary notations
                                                                    from the materials; or
                                                            </li>
                                                            <li className="terms-list__item t-new-body">
                                                                    transfer the materials to another person or “mirror”
                                                                    the materials on any other server.
                                                            </li>
                                                    </ul>
                                                    <p className="terms-body t-new-body">
                                                            b. This license shall automatically terminate if you violate
                                                            any of these restrictions and may be terminated by LeastSquares
                                                            at any time. Upon terminating your viewing of these
                                                            materials or upon the termination of this license, you must
                                                            destroy any downloaded materials in your possession whether
                                                            in electronic or printed format.
                                                    </p>
                                            </li>
                                            <li className="term">
                                                    <h3 className="terms-heading t-new-body-heading">
                                                            3. Disclaimer
                                                    </h3>
                                                    <p className="terms-body t-new-body">
                                                            a. The materials on LeastSquares’s website are provided on an
                                                            ‘as is’ basis. LeastSquares makes no warranties, expressed or
                                                            implied, and hereby disclaims and negates all other
                                                            warranties including, without limitation, implied warranties
                                                            or conditions of merchantability, fitness for a particular
                                                            purpose, or non-infringement of intellectual property or
                                                            other violation of rights.
                                                    </p>
                                                    <p className="terms-body t-new-body">
                                                            b. Further, LeastSquares does not warrant or make any
                                                            representations concerning the accuracy, likely results, or
                                                            reliability of the use of the materials on its website or
                                                            otherwise relating to such materials or on any sites linked
                                                            to this site.
                                                    </p>
                                            </li>
                                            <li className="term">
                                                    <h3 className="terms-heading t-new-body-heading">
                                                            4. Limitations
                                                    </h3>
                                                    <p className="terms-body t-new-body">
                                                            In no event shall LeastSquares or its suppliers be liable for
                                                            any damages (including, without limitation, damages for loss
                                                            of data or profit, or due to business interruption) arising
                                                            out of the use or inability to use the materials on
                                                            LeastSquares’s website, even if LeastSquares or a LeastSquares
                                                            authorized representative has been notified orally or in
                                                            writing of the possibility of such damage. Because some
                                                            jurisdictions do not allow limitations on implied
                                                            warranties, or limitations of liability for consequential or
                                                            incidental damages, these limitations may not apply to you.
                                                    </p>
                                            </li>
                                            <li className="term">
                                                    <h3 className="terms-heading t-new-body-heading">
                                                            5. Accuracy of Materials
                                                    </h3>
                                                    <p className="terms-body t-new-body">
                                                            The materials appearing on LeastSquares’s website could include
                                                            technical, typographical, or photographic errors. LeastSquares
                                                            does not warrant that any of the materials on its website
                                                            are accurate, complete or current. LeastSquares may make changes
                                                            to the materials contained on its website at any time
                                                            without notice. However LeastSquares does not make any
                                                            commitment to update the materials.
                                                    </p>
                                            </li>
                                            <li className="term">
                                                    <h3 className="terms-heading t-new-body-heading">
                                                            6. Links
                                                    </h3>
                                                    <p className="terms-body t-new-body">
                                                            LeastSquares has not reviewed all of the sites linked to its
                                                            website and is not responsible for the contents of any such
                                                            linked site. The inclusion of any link does not imply
                                                            endorsement by LeastSquares of the site. Use of any such linked
                                                            website is at the user’s own risk.
                                                    </p>
                                            </li>
                                            <li className="term">
                                                    <h3 className="terms-heading t-new-body-heading">
                                                            7. Modifications
                                                    </h3>
                                                    <p className="terms-body t-new-body">
                                                            LeastSquares may revise these terms of service for its website
                                                            at any time without notice. By using this website you are
                                                            agreeing to be bound by the then current version of these
                                                            terms of service.
                                                    </p>
                                            </li>
                                            <li className="term">
                                                    <h3 className="terms-heading t-new-body-heading">
                                                            8. Governing Law
                                                    </h3>
                                                    <p className="terms-body t-new-body">
                                                            These terms and conditions are governed by and construed in
                                                            accordance with the laws of Massachusetts and you
                                                            irrevocably submit to the exclusive jurisdiction of the
                                                            courts in that State or location.
                                                    </p>
                                            </li>
                                    </ol>
                            </div>
                            <div className="privacy-container">
                                    <h2 className="terms-title t-new-subhead">Privacy Policy</h2>
                                    <div className="privacy">
                                            <p className="terms-body t-new-body">
                                                    Your privacy is important to us.
                                            </p>
                                            <p className="terms-body t-new-body">
                                                    It is LeastSquares’s policy to respect your privacy regarding any
                                                    information we may collect while operating our website. Accordingly,
                                                    we have developed this privacy policy in order for you to understand
                                                    how we collect, use, communicate, disclose and otherwise make use of
                                                    personal information. We have outlined our privacy policy below.
                                            </p>
                                            <ul className="terms-list terms-list--bullets">
                                                    <li className="terms-list__item t-new-body">
                                                            We will collect personal information by lawful and fair
                                                            means and, where appropriate, with the knowledge or consent
                                                            of the individual concerned.
                                                    </li>
                                                    <li className="terms-list__item t-new-body">
                                                            Before or at the time of collecting personal information, we
                                                            will identify the purposes for which information is being
                                                            collected.
                                                    </li>
                                                    <li className="terms-list__item t-new-body">
                                                            We will collect and use personal information solely for
                                                            fulfilling those purposes specified by us and for other
                                                            ancillary purposes, unless we obtain the consent of the
                                                            individual concerned or as required by law.
                                                    </li>
                                                    <li className="terms-list__item t-new-body">
                                                            Personal data should be relevant to the purposes for which
                                                            it is to be used, and, to the extent necessary for those
                                                            purposes, should be accurate, complete, and up-to-date.
                                                    </li>
                                                    <li className="terms-list__item t-new-body">
                                                            We will protect personal information by using reasonable
                                                            security safeguards against loss or theft, as well as
                                                            unauthorized access, disclosure, copying, use or
                                                            modification.
                                                    </li>
                                                    <li className="terms-list__item t-new-body">
                                                            We will make readily available to customers information
                                                            about our policies and practices relating to the management
                                                            of personal information.
                                                    </li>
                                                    <li className="terms-list__item t-new-body">
                                                            We will only retain personal information for as long as
                                                            necessary for the fulfilment of those purposes.
                                                    </li>
                                            </ul>
                                            <p className="terms-body t-new-body">
                                                    We are committed to conducting our business in accordance with these
                                                    principles in order to ensure that the confidentiality of personal
                                                    information is protected and maintained. LeastSquares may change this
                                                    privacy policy from time to time at LeastSquares’s sole discretion.
                                            </p>
                                    </div>
                            </div>
                    </main>
            <AppFooter />
            </div>
        );
    }
}