/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-constant-condition */
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import {
    OrdersList,
    ComplexPaginationContainer,
    SectionTitle,
} from '../components';

const ordersQuery = (params, user) => {
    return {
        queryKey: [
            'orders',
            user.username,
            params.page ? parseInt(params.page) : 1,
        ],
        queryFn: () =>
            customFetch.get('/orders', {
                params,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }),
    };
};

export const loader =
    (store, queryClient) =>
    async ({ request }) => {
        const user = store.getState().userState.user;

        if (!user) {
            toast.warn('Only members of the coven may sip from the cauldron');
            return redirect('/login');
        }
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);
        try {
            const response = await queryClient.ensureQueryData(
                ordersQuery(params, user)
            );

            return { orders: response.data.data, meta: response.data.meta };
        } catch (error) {
            console.log(error);
            const errorMessage =
                error?.response?.data?.error?.message ||
                'The cauldron bubbles over, please re-stir the brew';
            toast.error(errorMessage);
            if (error?.response?.status === 401 || 403)
                return redirect('/login');
            return null;
        }
    };

const Orders = () => {
    const { meta } = useLoaderData();
    if (meta.pagination.total < 1) {
        return <SectionTitle text='Conjure some magic from our wares!' />;
    }
    return (
        <>
            <SectionTitle text='Brews' />
            <OrdersList />
            <ComplexPaginationContainer />
        </>
    );
};

export default Orders;
