import React from 'react';

const usPrice = price => {
    const newPrice = Math.floor(price / 1e2);

    return newPrice.toLocaleString('en-us', {
        style: 'currency',
        currency: 'USD',
    });
};

const Checkout = props => {
    const {selectedSpot} = props.location.state;

    console.log('This is props', selectedSpot);

    return (
        <div className="Checkout">
            <button>{'< '} Back to Search</button>
            <div style={{flexDirection: 'row'}}>
                <img src={selectedSpot.image} />
                <div style={{flexDirection: 'column'}}>
                    <h1>{selectedSpot.title}</h1>
                    <p>{selectedSpot.distance}</p>
                </div>
                <div > ___________________ </div>
                <form style={{display: 'flex', flexDirection: 'column'}}>

                    <label htmlFor="firstName" >First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        // value=""
                        className="checkoutInput"
                        required
                    />
                    <label htmlFor="lastName" >Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        // value=""
                        className="checkoutInput"
                        required
                    />
                    <label htmlFor="email" >Email</label>
                    <input
                        name="email"
                        type="text"
                        // value=""
                        className="checkoutInput"
                        required
                    />
                    <label htmlFor="phone" >Phone Number</label>
                    <input
                        name="phone"
                        type="text"
                        // value=""
                        className="checkoutInput"
                        required
                    />
                    <button>Purchase for {usPrice(selectedSpot.price)}</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
