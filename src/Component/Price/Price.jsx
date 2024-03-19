import Priceoptione from "./Priceoptione";

const Price = () => {
    const prices = [
        {
            "id": 1,
            "option_name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "option_name": "Premium Membership",
            "price": "$49.99/month",
            "features": [
                "Access to all equipment including cardio machines and weights",
                "Unlimited access to group fitness classes",
                "Access to sauna and steam room",
                "Personalized workout plans"
            ]
        },
        {
            "id": 3,
            "option_name": "Family Membership",
            "price": "$79.99/month",
            "features": [
                "Access for entire family (up to 4 members)",
                "Access to all gym facilities and equipment",
                "Discounts on additional services (personal training, nutrition counseling, etc.)"
            ]
        }
    ]


    return (
        <div>
            <h1 className="text-3xl font-bold text-center  my-5">Best Price In The Town</h1>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    prices.map(optione => <Priceoptione key={optione.id} optione={optione}></Priceoptione>)
                }
            </div>
        </div>
    );
};

export default Price;