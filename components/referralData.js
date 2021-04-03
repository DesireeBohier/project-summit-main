import useSWR from 'swr';
import React, { useRef, useState } from 'react';

export default function referralData() {       
    //Copy and paste functionality
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
      textAreaRef.current.select();
      document.execCommand('copy');
    };
    
    const fetcher = (url) => fetch(url).then(res => res.json());

    const { data, error } = useSWR("/api/dataTwo", fetcher);
    
    if (error) {
    return (
        <div>
            <div className="section-28">
                <div className="columns-9 w-row">
                <div className="column-21 w-col w-col-6"><img src="images/Ayli-Logo-1_1Ayli Logo (1).png" width={67} alt="" className="image-23 _1" />
                    <h1 className="heading-13 waitlist2 _2">Want <span className="text-span">Priority </span>Access?</h1>
                    <p className="paragraph-24 waitlist3">Get early access by referring your friends. The more friends that join, the sooner you'll get access.</p>
                    <div>
                        <div className="w-form">
                        <div className="div-block-37">
                            <input id="referralUrl" className="text-field-14 w-input" defaultValue="Some error occured" />
                            <button id="copyTextButton" className="button-3 w-button copy-button-click">Copy</button>
                        </div>
                        </div>
                        <div className="div-block-37" />
                        <div className="div-block-38">
                            <a href="" target="_blank" className="link-block-5 w-inline-block"><img src="images/facebook_1facebook.png" alt="" className="image-59" /></a>
                            <a href="" target="_blank" className="link-block-6 w-inline-block"><img src="images/twitter_1twitter.png" alt="" className="image-60" /></a>
                            <a href="" target="_blank" className="link-block-7 w-inline-block"><img src="images/email_1email.png" alt="" className="image-61" /></a>
                            <a href="" className="link-block-8 w-inline-block"><img src="images/linkedin_1linkedin.png" alt="" className="image-62" /></a>
                            <a href="" className="link-block-9 w-inline-block"><img src="images/message_1message.png" alt="" className="image-63" /></a>
                        </div>
                    </div>
                </div>
                <div className="column-22 w-clearfix w-col w-col-6"><img src="images/hero-img.png" alt="" className="image-58" /></div>
                </div>
            </div>
            <div className="section-29">
                <p className="paragraph-28">Some error occured</p>
                <div className="div-block-49">
                <div className="div-block-40">
                    <p className="paragraph-31">Your Position</p>
                    <h1 className="heading-15">Some error occured</h1>
                </div>
                <div className="div-block-41">
                    <p className="paragraph-31">Friends Referred</p>
                    <h1 className="heading-15">Some error occured</h1>
                </div>
                <div className="div-block-42">
                    <p className="paragraph-31">Total In Line</p>
                    <h1 className="heading-15">Some error occured</h1>
                </div>
                </div>
            </div>
        </div>
    )}
    if (!error && !data) {
    return (
        <div>
            <div className="section-28">
                <div className="columns-9 w-row">
                <div className="column-21 w-col w-col-6"><img src="images/Ayli-Logo-1_1Ayli Logo (1).png" width={67} alt="" className="image-23 _1" />
                    <h1 className="heading-13 waitlist2 _2">Want <span className="text-span">Priority </span>Access?</h1>
                    <p className="paragraph-24 waitlist3">Get early access by referring your friends. The more friends that join, the sooner you'll get access.</p>
                    <div>
                        <div className="w-form">
                        <div className="div-block-37">
                            <input id="referralUrl" className="text-field-14 w-input" defaultValue="Loading..." />
                            <button id="copyTextButton" className="button-3 w-button copy-button-click">Copy</button>
                        </div>
                        </div>
                        <div className="div-block-37" />
                        <div className="div-block-38">
                            <a href="" target="_blank" className="link-block-5 w-inline-block"><img src="images/facebook_1facebook.png" alt="" className="image-59" /></a>
                            <a href="" target="_blank" className="link-block-6 w-inline-block"><img src="images/twitter_1twitter.png" alt="" className="image-60" /></a>
                            <a href="" target="_blank" className="link-block-7 w-inline-block"><img src="images/email_1email.png" alt="" className="image-61" /></a>
                            <a href="" className="link-block-8 w-inline-block"><img src="images/linkedin_1linkedin.png" alt="" className="image-62" /></a>
                            <a href="" className="link-block-9 w-inline-block"><img src="images/message_1message.png" alt="" className="image-63" /></a>
                        </div>
                    </div>
                </div>
                <div className="column-22 w-clearfix w-col w-col-6"><img src="images/hero-img.png" alt="" className="image-58" /></div>
                </div>
            </div>
            <div className="section-29">
                <p className="paragraph-28">Loading... invited friends have joined. Keep checking</p>
                <div className="div-block-49">
                <div className="div-block-40">
                    <p className="paragraph-31">Your Position</p>
                    <h1 className="heading-15">Loading...</h1>
                </div>
                <div className="div-block-41">
                    <p className="paragraph-31">Friends Referred</p>
                    <h1 className="heading-15">Loading...</h1>
                </div>
                <div className="div-block-42">
                    <p className="paragraph-31">Total In Line</p>
                    <h1 className="heading-15">Loading...</h1>
                </div>
                </div>
            </div>
        </div>
    )}
    
    return (
        <div>
            <div className="section-28">
                <div className="columns-9 w-row">
                <div className="column-21 w-col w-col-6"><img src="images/Ayli-Logo-1_1Ayli Logo (1).png" width={67} alt="" className="image-23 _1" />
                    <h1 className="heading-13 waitlist2 _2">Want <span className="text-span">Priority </span>Access?</h1>
                    <p className="paragraph-24 waitlist3">Get early access by referring your friends. The more friends that join, the sooner you'll get access.</p>
                    <div>
                        <div className="w-form">
                        <div className="div-block-37">
                            <input ref={textAreaRef} className="text-field-14 w-input" defaultValue={data.referralUrl} />
                            {
                            /* Logical shortcut for only displaying the 
                                button if the copy command exists */
                            document.queryCommandSupported('copy') &&
                                <div>
                                <button onClick={copyToClipboard} className="button-3 w-button copy-button-click">Copy</button> 
                                </div>
                            }          
                        </div>
                        </div>
                        <div className="div-block-37" />
                        <div className="div-block-38">
                            <a href={data.facebookUrl} target="_blank" className="link-block-5 w-inline-block"><img src="images/facebook_1facebook.png" alt="" className="image-59" /></a>
                            <a href={data.twitterUrl} target="_blank" className="link-block-6 w-inline-block"><img src="images/twitter_1twitter.png" alt="" className="image-60" /></a>
                            <a href={data.emailUrl} target="_blank" className="link-block-7 w-inline-block"><img src="images/email_1email.png" alt="" className="image-61" /></a>
                            <a href={data.linkedInUrl} className="link-block-8 w-inline-block"><img src="images/linkedin_1linkedin.png" alt="" className="image-62" /></a>
                            <a href={data.textUrl} className="link-block-9 w-inline-block"><img src="images/message_1message.png" alt="" className="image-63" /></a>
                        </div>
                    </div>
                </div>
                <div className="column-22 w-clearfix w-col w-col-6"><img src="images/hero-img.png" alt="" className="image-58" /></div>
                </div>
            </div>
            <div className="section-29">
                <p className="paragraph-28">{data.numberOfReferrals} invited friends have joined. Keep checking</p>
                <div className="div-block-49">
                <div className="div-block-40">
                    <p className="paragraph-31">Your Position</p>
                    <h1 className="heading-15">{data.positionInLine}</h1>
                </div>
                <div className="div-block-41">
                    <p className="paragraph-31">Friends Referred</p>
                    <h1 className="heading-15">{data.numberOfReferrals}</h1>
                </div>
                <div className="div-block-42">
                    <p className="paragraph-31">Total In Line</p>
                    <h1 className="heading-15">{data.totalInLine}</h1>
                </div>
                </div>
            </div>
        </div>
    )
}