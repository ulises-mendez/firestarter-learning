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

/*
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
    );
  };
*/

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

const stripePromise = loadStripe('pk_test_51JYiCeHOSZzHYeBQ0KjMSaGX7VS649UAxnVr8xOFpJfzfqjG5z3ytxQw0Ut6xivhYEiPpdojOnzx03yRmLhqTVvH00JZJ7g4bi');

const Checkout= () =>{
    //const [options,setOptions] = useState(null)
    const {intent} = usePage().props
    
    const options = {
        // passing the client secret obtained from the server
        /*
        amount: intent.amount,
        currency: intent.currency,
        id: intent.id,
        */
        clientSecret: intent.client_secret,
      };
    

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

    console.log(options)
    
    return(
        <>
        <Head title="Checkout Page" />
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
                    <InertiaLink href={route('login')}>
                        <button className='p-2 px-4 text-orange rounded-full'>Login</button>
                    </InertiaLink>
                </div>
            </div>

        </div>
        <div className='w-full bg-orange bg-opacity-10 py-10'>
        <h1 className="text-3xl font-semibold text-center">
          Start your <strong>1-month free trial</strong>.
        </h1>
        <p className="text-xl font-semibold text-center mb-2"> Cancel anytime.</p>

        <div className='w-full max-w-2xl mx-auto'>
            <div className='flex items-center mb-4'>
                <div className='bg-orange w-8 h-8 rounded-full text-white flex items-center justify-center mr-2'>
                    <span className='font-semibold'>1</span>
                </div>
                <div>
                    <h2 className='font-semibold'>Confirm your billing cycle</h2>
                    <p className='text-sm'>Select annual to save 49% and expense with a single receipt</p>
                </div>
            </div>
        <div className='bg-white rounded-lg border'>
            <div className='flex flex-wrap items-stretch'>
                <div className='text-center w-full md:w-1/2 p-4 '>
                    <Select checked={cycle == 0} onClick={() => setCycle(0)}>
                        <h2 className='font-bold text-lg my-2'>Monthly</h2>
                        <p>1-month free trial then CAD $49/month*</p>
                    </Select>
                </div>
                <div className=' text-center rounded-lg w-full md:w-1/2 p-4'>
                    <Select checked={cycle == 1} onClick={() => setCycle(1)}>
                        <div className='text-center p-4'>
                            <h2 className='font-bold text-lg my-2'>Annually</h2>
                            <p className='px-8'>1-month free trial then CAD $499/year*</p>
                        </div>
                    </Select>
                </div>
            </div>
            <div className='bg-white rounded-lg '>
                <div className='border-y p-4'>
                    <div className='flex border-b p-2 justify-between'>
                        <p>Monthly after free trial</p>
                        <p>CAD$49.00</p>
                    </div>
                    <div className='flex p-2 justify-between'>
                        <p>Today's total</p>
                        <p>CAD$0.00</p>
                    </div>
                </div>
                <div className='p-4 text-sm'>
                    <p>Your free trial begins on {dateFormat(today)} and will end on {dateFormat(plusMonth)}. You can cancel anytime before {dateFormat(plusMonth)} to avoid being charged and we'll send an email reminder 7 days before the trial ends.</p>
                </div>
            </div>
            </div>
        </div>
        <div className='w-full max-w-2xl mx-auto mt-4'>
            <div className='flex items-center mb-4'>
                <div className='bg-orange w-8 h-8 rounded-full text-white flex items-center justify-center mr-2'>
                    <span className='font-semibold'>2</span>
                </div>
                <div>
                    <h2 className='font-semibold'>Select your payment method</h2>
                </div>
                <div className='flex-1 text-right'>
                    Why do we need this for a free trial?
                </div>
                
            </div>
            <div className='bg-white rounded-lg p-4 mb-4'>
                <div className='items-center px-4 grid grid-cols-2 gap-4'>
                        <Select checked={method == 0} onClick={() => setMethod(0)}>
                            <img src='/img/logos/cc.png' className='w-full mx-auto'/>
                        </Select>
                        <Select checked={method == 1} onClick={() => setMethod(1)}>
                            <img src='/img/logos/pp.jpg' className='mx-auto w-14'/>
                        </Select>
                </div>
                <div>
                    {
                        options &&

                        <Elements stripe={stripePromise} options={ options }>
                            <CheckoutForm />
                        </Elements>
                    }
                
                </div>
                <div className='p-4'>


                    
                    {
                        method === 0 &&
                    <form >
                        <InputLabel forInput="firstName" value="First Name*" />
                        <TextInput
                            type="text"
                            name="firstName"
                            value={data.firstName}
                            className="mt-1 block w-full"
                            autoComplete="first name"
                            
                            handleChange={onHandleChange}
                        />
                        <InputLabel forInput="lastName" value="Last Name*" />
                        <TextInput
                            type="text"
                            name="lastName"
                            value={data.lastName}
                            className="mt-1 block w-full"
                            autoComplete="last name"
                            
                            handleChange={onHandleChange}
                        />
                        <InputLabel forInput="cc" value="Credit or debit card number*" />
                        <TextInput
                            type="text"
                            name="cc"
                            value={data.cc}
                            className="mt-1 block w-full"
                            autoComplete="credit card number"
                            
                            handleChange={onHandleChange}
                        />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='w-full'>
                            <InputLabel forInput="expiration" value="Expiration date*" />
                            <TextInput
                                type="text"
                                name="expiration"
                                value={data.expiration}
                                className="mt-1 block w-full"
                                autoComplete="ccv"
                                
                                handleChange={onHandleChange}
                            />
                            </div>
                            <div className='w-full'>
                            <InputLabel forInput="expiration" value="Expiration date*" />
                            <TextInput
                                type="text"
                                name="code"
                                value={data.code}
                                className="mt-1 block w-full"         
                                handleChange={onHandleChange}
                            />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <InputLabel forInput="postalCode" value="Postal code *" />
                            <TextInput
                                type="text"
                                name="postalCode"
                                value={data.postalCode}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='w-full'>
                            <InputLabel forInput="gst" value="GST ID" />
                            <TextInput
                                type="text"
                                name="gst"
                                value={data.gst}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                            />
                            </div>
                            <div className='w-full'>
                            <InputLabel forInput="qst" value="PST/QST ID" />
                            <TextInput
                                type="text"
                                name="qst"
                                value={data.qst}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                            />
                            </div>
                        </div>
                        
                        <button className='btn-orange my-4'>Review Order</button>
                    </form>
                    }
                    {
                        method === 1 &&
                        <>
                            <p className='my-2'>Click <b>Continue to PayPal</b> to log in and confirm your purchase. You'll be sent back to this page to finish up.</p>
                            <button className='btn-orange'>Continue to PayPal</button>
                        </>
                    }
                    
                </div>
            </div>

            <div className='w-full max-w-2xl mx-auto mt-4'>
                <div className='flex items-center mb-4'>
                    <div className='bg-orange w-8 h-8 rounded-full text-white flex items-center justify-center mr-2'>
                        <span className='font-semibold'>3</span>
                    </div>
                    <div>
                        <h2 className='font-semibold'>Review your order</h2>
                    </div>
                    
                    
                </div>
                <div className='bg-white rounded-lg p-4 mb-4'>
                    <ul className='list-disc pl-4 mb-4'>
                       <li>Your free trial begins today and ends on {dateFormat(plusMonth)}</li>
                       <li>Beginning {dateFormat(today)}, your payment method will be charged CAN$49.00 each month (plus tax)</li>
                       <li>The plan will automaticallv renew each month until cancelled. To avoid charges for the next month cancel, before the renewal date.</li>
                    </ul>
                    <div className='bg-gray-100 p-4 mb-4'>
                        <p className='text-sm'>By placing this order you agree to our terms of service. To ensure continued service, we'll store and update (e.g., upon expiration) your payment method. Learn about how to cancel and oyr refund policy. Prices may change.</p>
                    </div>
                    <div className='text-center'>
                        <button className='btn-orange'>Start your free trial</button>
                    </div>
                    
                    <div className='mt-4 flex w-full items-center justify-center'>
                        <Icon name='secure'  className='w-4 h-4 fill-current mr-1'/>
                        <p className='text-gray-800 text-sm'>Secure Checkout</p>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg '>
                <div className='border-b p-4'>
                    <h2>Frequently asked questions</h2>
                </div>
                <div className='p-4 grid grid-cols-1 md:grid-cols-3'>
                    <div className='p-2'>
                        <h2 className='font-semibold text-sm'>Will I be charged during my free trial?</h2>
                        <p className='text-xs'>No, you won't be charged during vour free trial. which begins on Cantamber 17 2022 and ends on October 17 2022 You can cance anvtime before October 17 2022 tc avoid beina charged</p>
                    </div>
                    <div className='p-2'>
                        <h2 className='font-semibold text-sm'>How can I cancel during my free trial?</h2>
                        <p className='text-xs'>Once you're signed up, a link tc cancel will appear on your Settings page. Learn more about how to cancel on our Helo Center</p>
                    </div>
                    <div className='p-2'>
                        <h2 className='font-semibold text-sm'>What happens after the free trial period?</h2>
                        <p className='text-xs'>If vou do not cancel before your free trial neriod ends on Octobe 17 2022 vou will he automaticall charged for vour subscrintion</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
       

        </>
    )
}

export default Checkout