import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

import Logo from '@/Components/Logo'

const Products= () =>{
    return(
        <>
        <div className='w-full bg-white p-4 '>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div className='p-2'>
                    <InertiaLink href="/">
                        <Logo className='w-56'/>
                    </InertiaLink>
                </div>
                <div>
                    <InertiaLink href={route('login')}>
                        <button className='p-2 px-4 text-orange rounded-full'>Login</button>
                    </InertiaLink>
                </div>
            </div>

        </div>
        <div className='w-full bg-orange py-10'>
            <div className='w-full max-w-2xl mx-auto'>
        <h1 className="text-3xl font-semibold text-center py-2 text-white">
          Start your <strong>1-month free trial</strong>.
        </h1>
        <p className="text-xl font-semibold text-center py-2 text-white"> Cancel anytime.</p>
        <div className='flex flex-wrap items-stretch'>
            <div className=' text-center w-full md:w-1/2 p-4'>
                <div className='bg-white rounded border-2 border-black h-full flex flex-col'>
                    <div className='text-center bg-black text-white p-2 font-semibold'>
                        Save 49%
                    </div>
                    <div className='text-center p-4'>
                        <h2 className='font-bold text-lg my-2'>Annually</h2>
                        <p className='px-8'>1-month free trial then MX$49CAD/month*</p>
                    </div>
                    <div className='p-4'>
                        <button className='bg-black text-white font-semibold p-4 rounded-lg w-full'>Try for free</button>
                    </div>
                </div>
            </div>
            <div className='text-center w-full md:w-1/2 p-4 '>
                <div className='bg-white rounded p-2 h-full flex flex-col items-stretch'>
                    <div className='flex-1 flex flex-col items-center justify-center'>
                        <h2 className='font-bold text-lg my-2'>Monthly</h2>
                        <p>1-month free trial then MX$49CAD/month*</p>
                    </div>
                    <button className='bg-black text-white font-semibold p-4 rounded-lg w-full'>Try for free</button>
                </div>
            </div>
        </div>
        <p className='text-xs text-center my-2 text-white opacity-90'>We’ll remind you 7 days before your free trial ends. You won’t be charged until November 2, 2022.</p>
        <p className='text-center text-white text-sm font-semibold'>Need to train your team? <span> Learn more</span></p>
            </div>
        </div>

        <div className='bg-orange bg-opacity-10 text-gray-800 py-10'>
            <h2 className='text-4xl text-center font-bold'>Frequently asked questions</h2>
        </div>
        <div className='bg-orange bg-opacity-10'>
            <ul className='w-full max-w-4xl mx-auto flex flex-wrap text-gray-800'>
                <li className='w-full md:w-1/2'>
                    <dl className='p-4'>
                        <dt className='font-semibold mb-2'>What happens at the end of my free trial?</dt>
                        <dd className='text-sm'> Your membership will automatically renew at the end of your free trial. You can cancel at any time prior to the renewal at firestart.learning.com/settings.</dd>
                    </dl>
                </li>
                <li className='w-full md:w-1/2'>
                    <dl className='p-4'>
                        <dt className='font-semibold mb-2'> How will you bill me? </dt>
                        <dd className='text-sm'>  We offer both monthly and annual billing. Depending on what option you choose, your subscription will be renewed at the end of each month or at the end of each year. If you choose to pay annually, you’ll save up to 49% compared to paying monthly. </dd>
                    </dl>
                </li>
                <li className='w-full md:w-1/2'>
                    <dl className='p-4'>
                        <dt className='font-semibold mb-2'>  Can I change or cancel my plan later on? </dt>
                        <dd className='text-sm'>   Yes. You can downgrade or cancel anytime from your settings page. If you cancel, you will lose your Premium features at the end of your billing cycle. Be sure you use all your InMail messages before the cancellation goes into effect.  </dd>
                    </dl>
                </li>
                <li className='w-full md:w-1/2'>
                    <dl className='p-4'>
                        <dt className='font-semibold mb-2'> What is your refund policy? </dt>
                        <dd className='text-sm'> Firestarter Club does not offer refunds except in certain situations and jurisdictions, as noted in our <span className='text-orange'>refund policy</span>. </dd>
                    </dl>
                </li>

                <li className='w-full md:w-1/2'>
                    <dl className='p-4'>
                        <dt className='font-semibold mb-2'>Can I expense my membership?</dt>
                        <dd className='text-sm'> Many employers find Firestarter Learning so valuable that they’ll pay for their employees’ subscriptions. At the end of your purchase, you’ll receive the receipt in your email that you can use to file an expense report. </dd>
                    </dl>
                </li>

                <li className='w-full md:w-1/2'>
                    <dl className='p-4'>
                        <dt className='font-semibold mb-2'> What should I know about InMail and who’s viewed your profile? </dt>
                        <dd className='text-sm'>  InMail credits expire after 90 days. If you cancel your upgraded account, your credits will remain valid only until the end of your current billing cycle. For who’s viewed your profile, first & last name will not be listed for viewers who have chosen to remain semi- or fully-anonymous via their privacy settings. </dd>
                    </dl>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Products