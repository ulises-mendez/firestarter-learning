import React, { useState, useEffect } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  
} from '@stripe/react-stripe-js';

import { InertiaLink } from '@inertiajs/inertia-react'
import dateFormat from '@/Components/Date'
import Logo from '@/Components/Logo'
import classNames from 'classnames'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react'
import Icon from '@/Components/Icon'
import CheckoutForm from '@/Components/CheckoutForm'
import since from '@/lib/since';

const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

  const Select = (props) => {
    const checked = props.checked
    const selected = classNames('border-2 rounded-lg p-2 h-full flex flex-col justify-center cursor-pointer',{
        'border-orange bg-white shadow-lg' : checked,
        'bg-gray-100 ' :!checked
    })

    return (
        <div className={selected} {...props}>
            <div className='text-center p-4'>
                {props.children}
            </div>
        </div>
    )
  }


const Checkout= () =>{
    const {date,end,name,start} = usePage().props
    const [processing, setProcessing] = useState(false)
    const [message, setMessage] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [method, setMethod] = useState(null)
    const [cycle, setCycle] = useState(null)
    const today = new Date()
    const month = new Date()
    const monthly = today.getMonth()
    const plusMonth = month.setMonth(monthly+1)

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        cc: '',
        expiration: '',
        code: '',
        country:'',
        postalCode:'',
        gst: '',
        qst: '',
    })

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
    }

    
    return(
        <div className='flex bg-opacity-10 flex-col justify-end h-full'>
        <Head title="Receipt" />
        {
            processing &&
            <div className='fixed bg-gray-100 z-50 h-screen w-screen flex items-center justify-center'>
                <div className='bg-white rounded-lg'>
                    <div className='p-4 border-b text-orange'>Processing</div>
                    <div className='p-4'>
                        <p>Your transaction may take up to 30 seconds to process.</p>
                        <p>Please do not refresh this page</p>
                    </div>
                </div>
            </div>

        }
        
        <div className='w-full bg-white p-4 '>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div className='p-2'>
                    <InertiaLink href="/">
                        <Logo className='w-56'/>
                    </InertiaLink>
                </div>
                <div>
                    <InertiaLink href={route('dashboard')}>
                        <button className='p-2 px-4 text-orange rounded-full'>Go to Dashboard</button>
                    </InertiaLink>
                </div>
            </div>

        </div>
        <div className='w-full h-full  py-10 flex-1'>
            <div className='w-full max-w-2xl mx-auto mt-4'>
            <div className='bg-white flex justify-between rounded-lg border p-4 mb-4'>
                <div>
                    <h3 className='font-semibold'><span className='uppercase'>{name}</span>, you're all set!</h3>
                    <p className='text-xs'>We've emailed your receipt.</p>
                </div>
                <div>
                    <InertiaLink href={route('courses')}>
                        <button className='p-2 px-4 text-orange rounded-full hover:bg-orange hover:text-white'>Start Learning</button>
                    </InertiaLink>
                </div>
            </div>
            </div>
        <div className='w-full h-full max-w-2xl mx-auto'>
            
        <div className='bg-white rounded-lg border'>     
            <div className='p-4 flex justify-between'>
                <div>
                    <Logo className='w-36'/>
                </div>
                <div>
                    <button className='btn-orange'>Download</button>
                </div>
            </div>
            <div className='w-full flex justify-between p-4 text-sm'>
                <div className='w-full md:w-1/2'>
                    <h4 className='font-semibold'>Billed to:</h4>
                    <p><span className='uppercase'>{name}</span></p>
                </div>
                <div className='w-full md:w-1/2 flex justify-between'>
                    <div className='font-semibold'>
                    <p>Date:</p>
                    <p>Method:</p>
                    <p>Receipt #:</p>
                    <p>Invoice #:</p>
                    </div>
                    <div className='text-right'>
                        <p>{date}</p>
                        <p>Debit/Credit Card</p>
                        <p>2083995414</p>
                        <p>2083995414</p>
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <table className='w-full mb-8'>
                    <thead>
                        <tr className='border-y '>
                            <th className='p-2'>
                                Item
                            </th>
                            <th className='text-left p-2'>
                                Description
                            </th>
                            <th className='text-left p-2'>
                                Rate
                            </th>
                            <th className='text-left p-2'>
                                Quantity
                            </th>
                            <th className='text-right p-2'>
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody className='border-b'>
                        <tr className='text-sm'>
                            <td className='text-center p-2'>1</td>
                            <td className='p-2'><p>Learning Premium</p>
                            <p>From {start} to {end}</p></td>
                            <td className='p-2'>CAD $0.00</td>
                            <td className='p-2'>1</td>
                            <td className='text-right p-2'>CAD $0.00</td>
                        </tr>
                    </tbody>
                </table>
                
                <div className='flex p-2'>
                    <div className='w-1/2'>
                    <p className='text-xs pr-4'>
                    When your free trials ends on {end} you'll pay CAD $49.00 each month (plus tax) until you cancel. If you cancel before your free trial ends, you will not be charged. Cancel anytime by clicking the “Settings” icon on the homepage -&gt; access -&gt; manage account -&gt; cancel.
                    </p>
                    </div>
                    <div className='w-1/2 pl-8 text-sm'>
                        <div className='flex justify-between'>
                            <span className='font-semibold'>Subtotal:</span>
                            <span>CAD $0.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='font-semibold'>VAT:0%</span>
                            <span>CAD $0.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='font-semibold'>Invoice:</span>
                            <span>CAD $0.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='font-semibold'>Payment:</span>
                            <span>CAD $0.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='font-semibold'>Balance:</span>
                            <span className='text-2xl font-semibold'>CAD $0.00</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        </div>
       

        </div>
    )
}

export default Checkout