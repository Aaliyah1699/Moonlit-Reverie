/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action =
    (store, queryClient) =>
    async ({ request }) => {
        const formData = await request.formData();
        const { name, address } = Object.fromEntries(formData);
        const user = store.getState().userState.user;
        const { cartItems, orderTotal, numItemsInCart } =
            store.getState().cartState;

        const info = {
            name,
            address,
            chargeTotal: orderTotal,
            orderTotal: formatPrice(orderTotal),
            cartItems,
            numItemsInCart,
        };

        try {
            const response = await customFetch.post(
                '/orders',
                { data: info },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );
            queryClient.removeQueries(['orders']);
            store.dispatch(clearCart());
            toast.success('Cauldron bubbled, brew is ready!');
            return redirect('/orders');
        } catch (error) {
            console.log(error);
            const errorMessage =
                error?.response?.data?.error?.message ||
                'The ingredients did not stir correctly...';
            toast.error(errorMessage);
            if (error?.response?.status === 401 || 403)
                return redirect('/login');
            return null;
        }
    };

const CheckoutForm = () => {
    return (
        <Form method='POST' className='flex flex-col gap-y-4 font-bonny'>
            <h4 className='font-medium text-xl capitalize'>
                Address for thy Raven
            </h4>
            <FormInput
                label='What the Coven Calls Thee'
                name='name'
                type='text'
            />
            <FormInput
                label='Location of Thy Magical Lair'
                name='address'
                type='text'
            />
            <div className='mt-4'>
                <SubmitBtn text='Brew thy desire' />
            </div>
        </Form>
    );
};

export default CheckoutForm;
