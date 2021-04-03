import Head from 'next/head';
import ReferralData from '../components/referralData';

export default function Waitlist(data) {          
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Ayli - Want Priority Access?</title>
                <meta content="Get early access by referring 5 friends. The more friends that join, the sooner you'll get access." name="description" />
                <meta content="Ayli - Want Priority Access?" property="og:title" />
                <meta content="Get early access by referring 5 friends. The more friends that join, the sooner you'll get access." property="og:description" />
                <meta content="https://uploads-ssl.webflow.com/5d63870ca93ad9658ed39d5a/5d79ef5ce5f68d0042797773_Frame%202.4.png" property="og:image" />
                <meta content="Ayli - Want Priority Access?" property="twitter:title" />
                <meta content="Get early access by referring 5 friends. The more friends that join, the sooner you'll get access." property="twitter:description" />
                <meta content="https://uploads-ssl.webflow.com/5d63870ca93ad9658ed39d5a/5d79ef5ce5f68d0042797773_Frame%202.4.png" property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
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
                <ReferralData/>
                {/* [if lte IE 9]><![endif] */}
            </div>
        </div>
    );
}