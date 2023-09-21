/* eslint-disable react/prop-types */
const SectionTitle = ({ text }) => {
    return (
        <div className='border-b border-base-300 pb-5 font-playFair'>
            <h2 className='text-3xl font-medium tracking-wider capitalize font-playFair'>
                {text}
            </h2>
        </div>
    );
};

export default SectionTitle;
