import Head from 'next/head'

export default function FourZeroFour() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Not Found</title>
                <meta content="Not Found" property="og:title" />
                <meta content="Not Found" property="twitter:title" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="Webflow" name="generator" />
                {/* [if lt IE 9]><![endif] */}
                <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
                <React.Fragment>
                    <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', 'XXXXXXXXXXXXXXXXX');
                    fbq('track', 'PageView');` }}
                    />
                </React.Fragment>
                <React.Fragment>
                    <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
                        src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXXX&ev=PageView&noscript=1" />` }}
                        />
                </React.Fragment>
            </Head>
            <div>
                <div className="utility-page-wrap"><img src="images/Ресурс-7.png" srcSet="images/Ресурс-7-p-500.png 500w, images/Ресурс-7-p-800.png 800w, images/Ресурс-7-p-1080.png 1080w, images/Ресурс-7-p-1600.png 1600w, images/Ресурс-7.png 2029w" sizes="(max-width: 479px) 80vw, (max-width: 767px) 50vw, (max-width: 991px) 100vw, 984.546875px" alt="" className="image-30" /><img src="images/Ресурс-18.png" width={422} srcSet="images/Ресурс-18-p-500.png 500w, images/Ресурс-18-p-800.png 800w, images/Ресурс-18-p-1080.png 1080w, images/Ресурс-18.png 2158w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 80vw, 422px" alt="" className="image-31" /></div>
                {/* [if lte IE 9]><![endif] */}
            </div>
        </div>
    );
}