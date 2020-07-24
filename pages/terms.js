import React from "react";
import BackgroundWithText from "../components/BackgroundWithText";
import BaseApp from "../components/BaseApp";

export default class Terms extends React.Component {

    render() {
        return (
            <BaseApp
                title="Terms of Service"
                main={
                    <BackgroundWithText
                        title="Terms of Service"
                        description=""
                        element={
                            <div className="prose prose-lg text-gray-500 mx-auto">
                                <ul>
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
                                    <li>
                                        <h3>
                                            2. Use License
                                        </h3>
                                        <p>
                                            a. Permission is granted to temporarily download one copy of
                                            the materials (information or software) on LeastSquares’s
                                            website for personal, non-commercial transitory viewing
                                            only. This is the grant of a license, not a transfer of
                                            title, and under this license you may not:
                                        </p>

                                        <ul>
                                            <li>
                                                modify or copy the materials.
                                            </li>
                                            <li>
                                                use the materials for any commercial purpose, or for
                                                any public display (commercial or non-commercial).
                                            </li>
                                            <li>
                                                attempt to decompile or reverse engineer any
                                                software contained on LeastSquares’s website.
                                            </li>
                                            <li>
                                                remove any copyright or other proprietary notations
                                                from the materials.
                                            </li>
                                            <li>
                                                or transfer the materials to another person or “mirror”
                                                the materials on any other server.
                                            </li>
                                        </ul>
                                        <p>
                                            b. This license shall automatically terminate if you violate
                                            any of these restrictions and may be terminated by LeastSquares
                                            at any time. Upon terminating your viewing of these
                                            materials or upon the termination of this license, you must
                                            destroy any downloaded materials in your possession whether
                                            in electronic or printed format.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>
                                            3. Disclaimer
                                        </h3>
                                        <p>
                                            a. The materials on LeastSquares’s website are provided on an
                                            ‘as is’ basis. LeastSquares makes no warranties, expressed or
                                            implied, and hereby disclaims and negates all other
                                            warranties including, without limitation, implied warranties
                                            or conditions of merchantability, fitness for a particular
                                            purpose, or non-infringement of intellectual property or
                                            other violation of rights.
                                        </p>
                                        <p>
                                            b. Further, LeastSquares does not warrant or make any
                                            representations concerning the accuracy, likely results, or
                                            reliability of the use of the materials on its website or
                                            otherwise relating to such materials or on any sites linked
                                            to this site.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>
                                            4. Limitations
                                        </h3>
                                        <p>
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
                                    <li>
                                        <h3>
                                            5. Accuracy of Materials
                                        </h3>
                                        <p>
                                            The materials appearing on LeastSquares’s website could include
                                            technical, typographical, or photographic errors. LeastSquares
                                            does not warrant that any of the materials on its website
                                            are accurate, complete or current. LeastSquares may make changes
                                            to the materials contained on its website at any time
                                            without notice. However LeastSquares does not make any
                                            commitment to update the materials.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>
                                            6. Links
                                        </h3>
                                        <p>
                                            LeastSquares has not reviewed all of the sites linked to its
                                            website and is not responsible for the contents of any such
                                            linked site. The inclusion of any link does not imply
                                            endorsement by LeastSquares of the site. Use of any such linked
                                            website is at the user’s own risk.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>
                                            7. Modifications
                                        </h3>
                                        <p>
                                            LeastSquares may revise these terms of service for its website
                                            at any time without notice. By using this website you are
                                            agreeing to be bound by the then current version of these
                                            terms of service.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>
                                            8. Governing Law
                                        </h3>
                                        <p>
                                            These terms and conditions are governed by and construed in
                                            accordance with the laws of Massachusetts and you
                                            irrevocably submit to the exclusive jurisdiction of the
                                            courts in that State or location.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                }
            />
        );
    }
}