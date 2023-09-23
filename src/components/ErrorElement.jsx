import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <h4 className='font-bold text-4xl font-bonny'>
            The sorcery struck a snag, do not fret...
        </h4>
    );
};

export default ErrorElement;
