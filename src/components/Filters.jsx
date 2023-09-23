import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';
const Filters = () => {
    const { meta, params } = useLoaderData();
    const { search, company, category, shipping, order, price } = params;

    return (
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center font-bonny'>
            {/* SEARCH */}
            <FormInput
                type='search '
                label='Search Crystal Ball'
                name='search'
                size='input-sm'
                defaultValue={search}
            />
            {/* CATEGORIES */}
            <FormSelect
                label='Choose Realm'
                name='category'
                list={meta.categories}
                size='select-sm'
                defaultValue={category}
            />
            {/* COMPANIES */}
            <FormSelect
                label='Pick Coven'
                name='company'
                list={meta.companies}
                size='select-sm'
                defaultValue={company}
            />
            {/* ORDER */}
            <FormSelect
                label='Organize by Spell'
                name='order'
                list={['a-z', 'z-a', 'high', 'low']}
                size='select-sm'
                defaultValue={order}
            />
            {/* PRICE */}
            <FormRange
                name='price'
                label='Set Spell Rate'
                size='range-sm'
                price={price}
            />
            {/* SHIPPING */}
            <FormCheckbox
                name='shipping'
                label='Free Raven Delivery'
                size='checkbox-sm'
                defaultValue={shipping}
            />
            {/* BUTTONS */}
            <button type='submit' className='btn btn-primary btn-sm'>
                Unearth
            </button>
            <Link to='/products' className='btn btn-accent btn-sm'>
                Renew the Spell
            </Link>
        </Form>
    );
};

export default Filters;
