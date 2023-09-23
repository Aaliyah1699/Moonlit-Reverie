/* eslint-disable react/prop-types */
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <button
            type='submit'
            className='btn btn-primary btn-block font-bonny'
            disabled={isSubmitting}
        >
            {/* Display a loading spinner and "sending" text when submitting */}
            {isSubmitting ? (
                <>
                    <span className='loading loading-spinner'></span>
                    Casting...
                </>
            ) : (
                // Display the provided text or default to "submit"
                text || 'Conjure'
            )}
        </button> 
    );
};

export default SubmitBtn;
