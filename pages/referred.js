import Head from 'next/head'
import SlideUpAnimation from '../animations/slideUpAnimation';
import FadeInAnimation from '../animations/fadeInAnimation';
import React, { useEffect  } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { signIn, csrfToken } from 'next-auth/client';

const isBrowser = () => typeof window !== "undefined"

export default function Index() { 
    if(isBrowser()){
        var referralUrl = window.location.href;
    }  
    
    //stick navbar appearing after hero section logic
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView) {
            controls.start("hidden");
        } else {
            controls.start("visible");
        }
    }, [controls, inView]);

    //popup modal logic
    const controller = useAnimation();

    function openModal() {
        controller.start("visible");
    }
    function closeModal() {
        controller.start("hidden");
    }
    
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Ayli - Earn Money Browsing The Internet</title>
                <meta content="Ayli is a marketplace where companies pay for data you create while using the web and enables you to passively earn extra money each month" name="description" />
                <meta content="Ayli - A Marketplace To Get Paid For Your data" property="og:title" />
                <meta content="Ayli is a marketplace where companies pay for data you create while using the web and enables you to passively earn extra money each month" property="og:description" />
                <meta content="https://uploads-ssl.webflow.com/5d63870ca93ad9658ed39d5a/5d63870ca93ad926d1d39dcc_Frame%202.1.png" property="og:image" />
                <meta content="Ayli - A Marketplace To Get Paid For Your data" property="twitter:title" />
                <meta content="Ayli is a marketplace where companies pay for data you create while using the web and enables you to passively earn extra money each month" property="twitter:description" />
                <meta content="https://uploads-ssl.webflow.com/5d63870ca93ad9658ed39d5a/5d63870ca93ad926d1d39dcc_Frame%202.1.png" property="twitter:image" />
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
                <motion.div
                animate={controller }
                initial="hidden"
                transition={{ delay: 0, ease: [0.42, 0, 0.58, 1], duration: 0.2 }}
                variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
                }}
                style={{zIndex: 9996}}
                >
                <div className="modal-wrapper">
                    <div onClick={closeModal} className="div-block-32" />
                    <div className="form-block-3 w-form">
                        <form id="email" name="email" data-name="Email Form" action="/api/submit" method="post" className="form-2"><label htmlFor="email-5" className="field-label-3">Get Early Access</label><input type="email" className="text-field-3 w-input" maxLength={256} name="email" data-name="Email 2" placeholder="Email" id="email-2" required /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button-2 w-button" /></form>
                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
                </motion.div>
                <motion.div
                animate={controls}
                initial="hidden"
                transition={{ delay: 0, ease: [0.42, 0, 0.58, 1], duration: 0.2 }}
                variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
                }}
                >
                    <div role="banner" className="navbar w-nav">
                        <div className="container-2 w-container">
                            <a href="#" className="brand w-clearfix w-nav-brand"><img src="images/ayli-logo-no-icon-dark.png" width={67} sizes="100vw" srcSet="images/ayli-logo-no-icon-dark-p-500.png 500w, images/ayli-logo-no-icon-dark-p-800.png 800w, images/ayli-logo-no-icon-dark-p-1080.png 1080w, images/ayli-logo-no-icon-dark.png 1099w" alt="" className="image-7" /></a>
                            <button onClick={openModal} className="button w-button">Get Early Access</button>
                        </div>
                    </div>
                </motion.div>
                <div ref={ref} data-w-id="4b1f1ffc-60dd-1832-cae3-aa71a5f38c02" className="section">
                    <div className="columns w-row">
                        <div className="column-2 w-col w-col-4"><img src="images/Ayli-Logo-1_1Ayli Logo (1).png" width={67} alt="" className="image-47" /><img src="images/ayli-logo-no-icon-dark.png" width={67} sizes="(max-width: 767px) 100vw, 67px" srcSet="images/ayli-logo-no-icon-dark-p-500.png 500w, images/ayli-logo-no-icon-dark-p-800.png 800w, images/ayli-logo-no-icon-dark-p-1080.png 1080w, images/ayli-logo-no-icon-dark.png 1099w" alt="" className="image-23" />
                            <h1 className="heading-4">Earn <span className="text-span">Money<br />‍</span>Browsing The Internet</h1>
                            <p className="paragraph-14">Ayli is a marketplace where companies pay for data you create while using the web and enables you to passively earn extra money each month</p>
                            <p className="paragraph-15"><strong className="bold-text-2">Gain Early Access</strong></p>
                            <div className="form-block-4 w-form">
                                <form method='post' action='/api/auth/signin/email' className="form-3">
                                    <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
                                    <input type='text' id='email' name='email' className="text-field-4 w-input" placeholder="Email"/>
                                    <button type='submit' className="submit-button-3 w-button">Submit</button>
                                </form>
                            </div>
                            <p className="paragraph-16">By entering your email you agree to our <a href="/privacy" target="_blank" className="link-2">privacy policy.</a>
                            </p>
                            <button className="submit-button-2 w-button" onClick={() => signIn('email', { email: 'boomer.baker@ayli.io', callbackUrl: 'http://localhost:3000/waitlist' })}>Continue With Email</button>
                            <button className="submit-button-2 w-button" onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/waitlist', referralUrl: referralUrl })}>Continue With Google</button>
                        </div>
                        <div className="column w-col w-col-8"><img src="images/Path2-2.png" sizes="(max-width: 767px) 100vw, 67vw" srcSet="images/Path2-2-p-500.png 500w, images/Path2-2-p-800.png 800w, images/Path2-2.png 890w" alt="" className="image" /><img src="images/Path1-2.png" sizes="(max-width: 767px) 100vw, 60vw" srcSet="images/Path1-2-p-500.png 500w, images/Path1-2-p-800.png 800w, images/Path1-2.png 810w" alt="" className="image-2" /><img src="images/hero-img.png" alt="" className="image-3" /></div>
                    </div>
                </div>
                <div className="section-2">
                    <div className="div-block-2">
                        <div className="div-block-4" />
                        <div className="animation-div">
                            <FadeInAnimation>
                                <div className="div-block-3" />
                                <h1 className="heading-2">Earn More The More People Use Ayli</h1>
                                <p className="paragraph-3 fade-in">The more people sign up to get paid for their data, the more companies sign up to buy it. Similarly, the more companies that sign up to buy data, the more people sign up to earn money for it.<br />‍<br />This cycle is known as a network effect. With each new person that uses Ayli, it enables you to earn more for your data. Also, it forces companies to start paying you directly whenever they use it.<br /><br />Businesses currently make around $400 billion monetizing people's information every year. We think its time you get paid for it instead.<br /></p>
                            </FadeInAnimation>
                        </div>
                    </div>
                </div>
                <div className="section-23"><img src="images/Group-21-1.png" data-w-id="c80d2d37-07b3-dc38-23fe-99c43ce5ceec" alt="" className="image-49" /><img src="images/Group-26.png" data-w-id="c80d2d37-07b3-dc38-23fe-99c43ce5ceed" sizes="100vw" srcSet="images/Group-26-p-500.png 500w, images/Group-26-p-800.png 800w, images/Group-26.png 895w" alt="" className="image-50" /></div>
                <div className="section-3">
                    <div className="columns-2 w-row">
                        <div className="column-3 w-clearfix w-col w-col-5">
                            <div className="div-block-5">
                                <div className="div-block-6" />
                                <div className="animation-div">
                                    <FadeInAnimation>
                                        <div className="div-block-7" />
                                        <h1 className="heading-3 fade-in">Easy Setup</h1>
                                        <p className="paragraph-4 fade-in">Download the browser extension, download the app, create an account, and start earning.<br />‍<br />We make it as easy as possible for you to immediately start making extra money for data you create while using the internet.<br /><br />One account syncs across all platforms. From a phone, to a tablet, to a computer. We got you covered. <br /></p>
                                    </FadeInAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="column-4 w-col w-col-7">
                            <div className="div-block-10 w-clearfix">
                                <SlideUpAnimation><img src="images/GoogleStore_Screenshot.png" width={361} data-w-id="1d44a11f-b1b3-6c81-1075-f8205fc58984" srcSet="images/GoogleStore_Screenshot-p-500.png 500w, images/GoogleStore_Screenshot-p-800.png 800w, images/GoogleStore_Screenshot-p-1080.png 1080w, images/GoogleStore_Screenshot.png 1280w" sizes="(max-width: 479px) 78vw, (max-width: 991px) 300px, 361px" alt="" className="image-18" /></SlideUpAnimation>
                                <SlideUpAnimation><img src="images/SignUp-Popup-v3.png" width={291} data-w-id="1d44a11f-b1b3-6c81-1075-f8205fc58985" srcSet="images/SignUp-Popup-v3-p-500.png 500w, images/SignUp-Popup-v3.png 577w" sizes="(max-width: 479px) 50vw, (max-width: 991px) 260px, 290.984375px" alt="" className="image-19" /></SlideUpAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-4">
                    <div className="columns-3 w-row">                        
                        <div className="column-5 w-col w-col-7">
                            <SlideUpAnimation><img src="images/Welcome_Popup_v2.png" width={521} data-w-id="2060857c-08b2-2f48-6657-153c50a3d606" srcSet="images/Welcome_Popup_v2-p-500.png 500w, images/Welcome_Popup_v2.png 577w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 480px, (max-width: 991px) 58vw, 521px" alt="" className="image-13" /></SlideUpAnimation>    
                        </div>
                        <div className="column-6 w-clearfix w-col w-col-5">
                            <div className="div-block-5 spacing">
                                <div className="div-block-6" />
                                <div className="animation-div">
                                    <FadeInAnimation>
                                        <div className="div-block-7 div-block-8" />
                                        <h1 className="heading-3 heading-4">Passively Earn <br />Extra Cash</h1>
                                        <p className="paragraph-4 paragraph-5">Ayli does the work for you. Whether you use the internet on your phone or a computer. All you need to do is have the browser extension and app downloaded.<br /><br />Have confidence knowing we’re working hard so you earn more. It’s kind of like having your own personal assistant, but our focus is on making you money. <br /></p>
                                    </FadeInAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-5">
                    <div className="columns-2 w-row">
                        <div className="column-11 w-clearfix w-col w-col-5">
                            <div className="div-block-5">
                                <div className="div-block-6" />
                                <div className="animation-div">
                                    <FadeInAnimation>
                                        <div className="div-block-7" />
                                        <h1 className="heading-3 heading-5">Easily Withdraw<br />Your Funds</h1>
                                        <p className="paragraph-4 paragraph-6">No minimums, no fees, no hassle. Easily withdraw your money when you want how you want.<br />‍<br />Nobody likes to be promised something, just to be given the runaround. You will never get that here with Ayli. We hope to build your trust over time and that you keep using our services for many years to come. <br /></p>
                                    </FadeInAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="column-5 w-col w-col-7">
                            <SlideUpAnimation><img src="images/AddBank_Popup_v2.png" width={426} data-w-id="67c0f58a-aac9-790e-70a0-de24a933c353" srcSet="images/AddBank_Popup_v2-p-500.png 500w, images/AddBank_Popup_v2.png 577w" sizes="(max-width: 479px) 100vw, 426px" alt="" className="image-14" /></SlideUpAnimation>
                        </div>
                    </div>
                </div>
                <div className="section-4">
                    <div className="columns-3 w-row">
                        <div className="column-9 w-col w-col-7">
                            <SlideUpAnimation><img src="images/Demand-Site-landing-page-desktop-3.png" width={467} data-w-id="cd9dec11-e3f4-53d0-4310-8aecf3a28641" srcSet="images/Demand-Site-landing-page-desktop-3-p-500.png 500w, images/Demand-Site-landing-page-desktop-3.png 552w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 467px, (max-width: 991px) 58vw, 467px" alt="" className="image-35" /></SlideUpAnimation>
                        </div>                       
                        <div className="column-11 w-clearfix w-col w-col-5">
                            <div className="div-block-5 spacing">
                                <div className="div-block-6" />
                                <div className="animation-div">
                                    <FadeInAnimation>
                                        <div className="div-block-7 div-block-8" />
                                        <h1 className="heading-3 heading-4">Spend It How <br />You Want</h1>
                                        <p className="paragraph-4 paragraph-5 paragraph-7">Whether you use it for a night out or as an emergency fund. It’s up to you. We don’t place restrictions on what you are able to spend your money on.&nbsp;<br />‍<br />If you need some ideas, make sure to check out our social media accounts to see what other users of Ayli are planning to spend theirs on.<br /></p>
                                    </FadeInAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-7">
                    <div className="columns-6 w-row">
                        <div className="column-11 w-clearfix w-col w-col-5">
                            <div className="div-block-5">
                                <div className="div-block-6" />
                                <div className="animation-div">
                                    <FadeInAnimation>
                                        <div className="div-block-7" />
                                        <h1 className="heading-3 heading-7">Grow Your <br />Money With Ayli</h1>
                                        <p className="paragraph-4 paragraph-8">In the future, we are aiming to empower you with the ability to automatically invest the extra cash you earn with us. <br /><br />All you will need to do is keep your money stored in your account and click a button.<br />‍<br />Investment applications force you to give them your hard-earned money. We not only help you earn money passively but help you grow it even more. <br /></p>
                                    </FadeInAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="column-12 w-col w-col-7">
                            <SlideUpAnimation><img src="images/Group-27.png" width={491} data-w-id="fa2fe1ee-fca9-60fc-eb2d-e305212a00b8" srcSet="images/Group-27-p-500.png 500w, images/Group-27-p-800.png 800w, images/Group-27.png 946w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 100vw, (max-width: 991px) 58vw, 491px" alt="" className="image-51" /></SlideUpAnimation>
                        </div>
                    </div>
                </div>
                <div className="section-14">
                    <div className="columns-7 w-row">
                        <div className="column-16 w-col w-col-6"><img src="images/ayli-logo-no-icon-dark.png" width={67} sizes="67px" srcSet="images/ayli-logo-no-icon-dark-p-500.png 500w, images/ayli-logo-no-icon-dark-p-800.png 800w, images/ayli-logo-no-icon-dark-p-1080.png 1080w, images/ayli-logo-no-icon-dark.png 1099w" alt="" className="image-46" />
                            <p className="paragraph-18">© 2019, Ayli, Inc. All Rights Reserved.</p>
                            <a href="https://twitter.com/aylidata" target="_blank" className="link-block-4 w-inline-block"><img src="images/Asset-14-1-5.png" width={40} alt="" /></a>
                            <a href="https://www.linkedin.com/company/aylidata/" target="_blank" className="w-inline-block"><img src="images/Asset-14-1-6.png" width={40} alt="" className="image-52" /></a>
                            <a href="https://www.facebook.com/aylidata/" target="_blank" className="w-inline-block"><img src="images/Asset-14-1-8.png" width={40} alt="" className="image-53" /></a>
                            <a href="https://www.instagram.com/aylidata/" target="_blank" className="w-inline-block"><img src="images/Asset-14-1-7.png" width={40} alt="" className="image-54" /></a>
                        </div>
                        <div className="column-15 w-col w-col-6">
                            <p className="paragraph-17">Gain Early Access</p>
                            <div className="form-block-5 w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" className="form-3 form-4"><input type="email" className="text-field-5 text-label-4 w-input" maxLength={256} name="email-3" data-name="Email 3" placeholder="Email" id="email-3" required /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button-4 submit-button-4 w-button" /></form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [if lte IE 9]><![endif] */}
            </div>
        </div>
    );
}