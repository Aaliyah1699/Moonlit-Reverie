/* eslint-disable react/prop-types */
const FormInput = ({ label, name, type, defaultValue, size }) => {
    return (
        <div className='form-control font-bonny'>
            <label htmlFor={name} className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className={`input input-bordered ${size}`}
            />
        </div>
    );
};

export default FormInput;
