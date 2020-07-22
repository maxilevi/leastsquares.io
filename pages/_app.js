import '../styles/tailwind.css';
import React from "react";

export default function LeastSquares({ Component, pageProps })
{
    return (<React.StrictMode>
                <Component {...pageProps} />
    </React.StrictMode>);
}