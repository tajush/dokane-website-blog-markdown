import Head from 'next/head'
import React from 'react'

function PrivacyPolicy() {
    return (
       <>
        <div className='pt-16'>
            <div className='max-w-7xl px-4 m-auto'>
                <div className=' py-10'>
                    <header>
                        <h1 className='text-[28px] font-inter font-semibold'>Privacy Policy</h1>
                    </header>
                    <article className='mt-4'>
                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Definitions</h4>
                            <p>The “Documents” refers to our Privacy Policy, and all other operating rules. “Software,””we,”and “us”refer to <a href="/">DokanE</a>.</p>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Data Collection</h4>
                            <ul className='listStyle'>
                                <li>
                                    <p>Collection of Personal Data shall be resorted to only to the extent that it may be necessary for the technical and commercial operation of its activities.</p>
                                </li>
                                <li>
                                    <p>Users shall be informed of any such collection and shall also be informed of the specific purpose for which it is being collected not later than the moment of collection.</p>
                                </li>
                            </ul>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Personal Information</h4>
                            <ul className='listStyle'>
                                <li>
                                    <p>The Personal Data collected shall be used fairly and lawfully for the specified purposes and only for these purposes;</p>
                                </li>
                                <li>
                                    <p>Users shall be given access to their Personal Data;</p>
                                </li>
                                <li>
                                    <p>The Company shall ensure that Users’ Personal Data shall be kept secure using both technical and organizational measures;</p>
                                </li>
                                <li>
                                    <p>The Company shall not pass on Users’ Personal Data to anybody unless a User specifically consents that it can so communicate his or her information; and</p>
                                </li>
                                <li>
                                    <p>The Company shall only store Users’ Personal Data for the length of time required for the purpose for which it is collected.</p>
                                </li>
                            </ul>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Collection of Data and Information</h4>
                            <ul className='listStyle'>
                                <li>
                                    <p>Users that wish to avail themselves of that part of the Services which requires registration and who submit an online application shall be required to provide the Company with particular information in the form of completing certain fields which the Company may deem necessary for the provision of the Services.</p>
                                </li>
                                <li>
                                    <p>The Company may track Users’ visits to the Website to better understand what appeals most to Users and improve the Services. To this end Cookies may be installed on Users' computers or such other devices as is used to access the Website.</p>
                                </li>
                            </ul>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Access and Control to Personal Data</h4>
                            <p>The Company shall ensure that Users’ shall be able to:</p>
                            <ul className='listStyle'>
                                <li>
                                    <p>View the Personal Data held by the Company on the particular User;</p>
                                </li>
                                <li>
                                    <p>Request that any Personal Data that is inaccurate, irrelevant or out of date be amended or deleted; and</p>
                                </li>
                                <li>
                                    <p>Choose to stop using the Services and have his or her Personal Data deleted, if such deletion is permissible by law and/or will not prejudice the Company’s position at law.</p>
                                </li>
                            </ul>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Security</h4>
                            <p>Company employees who have access either to the databases that store User information or to the servers that host the Services shall comply with strict security rules. Sensitive Personal Data shall be stored in encrypted mode.</p>
                            <p>The Company is not hereby undertaking that no loss, misuse or alteration of data shall occur.</p>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Cookie files</h4>
                            <p>The Company’s use of cookie files to collect and process personal information are provided in our Cookie Policy to improve website navigation, analyze visitor data and improve the user experience.</p>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Disclosure of Personal Data</h4>
                            <ul className='listStyle'>
                                <li>
                                    <p>The Company shall only disclose Personal Data if it is bound to do so by law or if it has been expressly authorized to do so by the User concerned.</p>
                                </li>
                                <li>
                                    <p>The Company shall not sell Personal Data to third parties unless it has obtained the User’s consent thereto.</p>
                                </li>
                                <li>
                                    <p>The Company shall store Personal Data for such duration as may be necessary to comply with legal requirements.</p>
                                </li>
                            </ul>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-semibold font-poppins'>Contact Us</h4>
                            <p>If you have any questions or concerns about our privacy policy, please email us at <a className='text-blue-600' href="mailto:contact@dokanepos.com">contact@dokanepos.com</a></p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
       </>
    )
}

export default PrivacyPolicy
