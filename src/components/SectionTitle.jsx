/* eslint-disable react/prop-types */
const SectionTitle = ({ text }) => {
    return (
        <div className='border-b border-base-300 pb-5 font-bonny'>
            <h2 className='text-3xl font-medium tracking-wider capitalize font-bonny'>
                {text}
            </h2>
        </div>
    );
};

export default SectionTitle;
