import React from 'react'
import { useForm, usePage, InertiaLink, Link } from '@inertiajs/inertia-react';
import ReactCodeInput from "@acusti/react-code-input";
import Logo from '@/Components/Logo'
import Layout from '@/Layouts/Registration'
import InputError from '@/Components/InputError';

const Verify = ({ status }) =>{
    const {auth} = usePage().props
    //console.log(auth)
    const { data, setData, errors, post, processing } = useForm({
        code: '',
      })
    
    const handlePinChange = pinCode => {
        setData('code',pinCode);
    }
    
    const propsCode = {
        inputStyle: {
            margin:  '2px',
            MozAppearance: 'textfield',
            width: '60px',
            borderRadius: '8px',
            fontSize: '20px',
            fontWeight: 'bold',
            height: '60px',
            //paddingLeft: '12px',
            backgroundColor: '#f0f0f0',
            color: '#000',
            border: '1px solid #f5f5f5',
            boxShadow: '-2px 1px 8px 0px rgba(0,0,0,0.05) inset'
            },
            inputStyleInvalid: {
            margin:  '2px',
            MozAppearance: 'textfield',
            width: '60px',
            borderRadius: '8px',
            fontSize: '20px',
            height: '60px',
            //paddingLeft: '12px',
            backgroundColor: 'red',
            color: '#000000',
            border: '1px solid red'
            }
        }
    const submit = (e) => {
    e.preventDefault();
    post(route('verification.verify'));
    };
    return(
        <>
        <div className='text-gray-800 py-10 text-center'>
            <h2 className='text-4xl font-bold'>Confirm your email</h2>
            <p>Type in the code we sent to {auth.user.email}.</p>
        </div>
        <form onSubmit={submit}>
        <div className='bg-gray-100 flex justify-center text-sm'>
            <ReactCodeInput
                id="code"
                name="code"
                type="number"
                inputmode="numeric"
                pattern="[0-9]*"
                fields={6}
                onChange={handlePinChange}
                value={data.code}
                className="pinCode"
                {...propsCode}
            />
            
        </div>
        <div>
            <InputError message={errors.code} className="mt-2" />
        </div>
        <div className='w-full'>
            <div className='w-full mt-2 text-center text-gray-800'>
                <div>
                    <span>Didn’t receive the code?</span>
                    <Link href={route('verification.send')} method="post" as="button" className='text-orange font-semibold ml-2' type="button">Send again</Link>
                </div>
            </div>
            {status === 'verification-link-sent' && (
                <div className="mb-4 font-semibold text-sm text-green-600">
                    A new verification code has been sent to the email address you provided during registration.
                </div>
            )}
        </div>
        <div className='text-center my-4'>
            <button type='submit' className='btn-orange'>Confirm</button>
        </div>
        </form>
        </>
    )
}

Verify.layout = page => <Layout title="Verify Email" children={page} />

export default Verify