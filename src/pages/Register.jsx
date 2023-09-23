/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await customFetch.post('/auth/local/register', data);
        toast.success('Our book of shadows now bears your markings');
        return redirect('/login');
    } catch (error) {
        const errorMessage =
            error?.response?.data?.error?.message ||
            'Check your book of shadows for the proper incantation';
        toast.error(errorMessage);
        return null;
    }
};

const Register = () => {
    return (
        <section className='h-screen grid place-items-center'>
            <Form
                method='POST'
                className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
            >
                <h4 className='text-center text-3xl font-bold'>
                    Join the Coven
                </h4>
                <FormInput type='text' label='username' name='username' />
                <FormInput type='email' label='email' name='email' />
                <FormInput type='password' label='password' name='password' />
                <div className='mt-4'>
                    <SubmitBtn text='Craft a Spell' />
                </div>
                <p className='text-center'>
                    One of Us Already?
                    <Link
                        to='/login'
                        className='ml-2 link link-hover link-primary capitalize'
                    >
                        Unlock the Portal
                    </Link>
                </p>
            </Form>
        </section>
    );
};
export default Register;
