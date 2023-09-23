import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

// Action function for handling login
export const action =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        try {
            const response = await customFetch.post('/auth/local', data);
            store.dispatch(loginUser(response.data));
            toast.success('Our book opened its pages to you, blessed be.');
            return redirect('/');
        } catch (error) {
            const errorMessage =
                error?.response?.data?.error?.message ||
                'That spell is not the right one for this moon.';
            toast.error(errorMessage);
            return null;
        }
    };

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to log in as a guest user
    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post('/auth/local', {
                identifier: 'test@test.com',
                password: 'secret',
            });
            dispatch(loginUser(response.data));
            toast.success('Our realm welcomes your energy');
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error('The portal seal remains unbroken...please cast again');
        }
    };

    return (
        <section className='h-screen grid place-items-center font-bonny'>
            <Form
                method='post'
                className='card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
            >
                <h4 className='text-center text-3xl font-bold'>
                    Unlock the Portal
                </h4>
                <FormInput type='email' label='email' name='identifier' />
                <FormInput type='password' label='password' name='password' />
                <div className='mt-4'>
                    <SubmitBtn text='Access Your Magic' />
                </div>
                <button
                    type='button'
                    className='btn btn-secondary btn-block'
                    onClick={loginAsGuestUser}
                >
                    Magical Visitor
                </button>
                <p className='text-center'>
                    New to the night?{' '}
                    <Link
                        to='/register'
                        className='ml-2 link link-hover link-primary capitalize'
                    >
                        Craft a Spell
                    </Link>
                </p>
            </Form>
        </section>
    );
};

export default Login;
