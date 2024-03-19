import PropTypes from 'prop-types';

const Priceoptione = ({ optione }) => {
    const { option_name, price, features } = optione;
    console.log(optione)
    return (
        <div className='md:w-[400px] p-5 rounded bg-yellow-200'>
            <div className='space-y-5 flex flex-col h-[400px]'>
                <div className='text-center'>
                <h1 className='text-3xl font-bold'>{price}</h1>
                <h2 className='text-xl font-bold'>{option_name}</h2>
                </div>
                <div className='pl-6 flex-grow'>
                    {
                        features.map((feature, idx) => <li className='list-none text-lg font-semibold' key={idx}>* {feature}</li>)
                    }
                </div>
                <button className='md:w-full bg-green-500 rounded p-2 text-lg font-semibold'>Buy Now</button>
            </div>
        </div>
    );
};

Priceoptione.propTypes = {
    optione: PropTypes.object,
}

export default Priceoptione;