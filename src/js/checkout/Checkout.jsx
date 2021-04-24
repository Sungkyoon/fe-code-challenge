import React from 'react';
import {Link} from 'react-router-dom';

const CHECKOUT_STYLES = {
    height: '550px',
    width: '500px',
    borderStyle: 'groove',
    borderRadius: '7px',
    marginLeft: '35%',
    marginTop: '10%'
};

const INPUT_STYLES = {
    height: '30px',
    width: '90%',
    marginTop: '5px',
    borderRadius: '3px',
    borderWidth: '0.5px',
    borderColor: 'grey',
    opacity: '0.3'
};

const LABEL_STYLES = {
    marginTop: '5px',

};

const BUTTON_STYLES = {
    marginTop: '20px',
    backgroundColor: '#00c853',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    height: '35px',
    float: 'right',
};

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
        <div
            className="Checkout"
            style={CHECKOUT_STYLES}
        >
            <div style={{marginLeft: '5%'}}>

                <div style={{backgroundColor: '#0082FF', width: '105%', height: '40px', marginLeft: '-5.5%', marginRight: '-0.1%', borderTopLeftRadius: '7px', borderTopRightRadius: '7px'}}>
                    <Link to="/">
                        <button style={{border: 'none', backgroundColor: 'transparent', color: 'white', marginTop: '10px', marginLeft: '10px'}}>{'< '} Back to Search</button>
                    </Link>
                </div>
                <div>
                    <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'baseline', marginTop: '15px', marginBottom: '15px'}}>
                        <img
                            src={selectedSpot.image}
                            style={{borderRadius: '7px'}}
                        />
                        <div style={{flexDirection: 'column', marginLeft: '5%'}}>
                            <h2 style={{marginRight: '5%'}}>{selectedSpot.title}</h2>
                            <p style={{marginTop: '35px'}}>{selectedSpot.distance}</p>
                        </div>
                    </div>

                    <hr style={{marginRight: '5%', opacity: '0.5', marginTop: '5%', marginBottom: '5%'}} />
                    <form style={{display: 'flex', flexDirection: 'column'}}>

                        <label
                            style={{marginTop: '10px'}}
                            htmlFor="firstName"
                        >First Name
                        </label>
                        <input
                            style={INPUT_STYLES}
                            name="firstName"
                            type="text"
                            // value=""
                            className="checkoutInput"
                            required
                        />
                        <label
                            style={LABEL_STYLES}
                            htmlFor="lastName"
                        >Last Name
                        </label>
                        <input
                            style={INPUT_STYLES}
                            name="lastName"
                            type="text"
                            // value=""
                            className="checkoutInput"
                            required
                        />
                        <label
                            style={LABEL_STYLES}
                            htmlFor="email"
                        >Email
                        </label>
                        <input
                            style={INPUT_STYLES}
                            name="email"
                            type="text"
                            // value=""
                            className="checkoutInput"
                            required
                        />
                        <label
                            style={LABEL_STYLES}
                            htmlFor="phone"
                        >Phone Number
                        </label>
                        <input
                            style={INPUT_STYLES}
                            name="phone"
                            type="text"
                            // value=""
                            className="checkoutInput"
                            required
                        />
                        <div style={{width: '50%', marginLeft: '40%'}}>
                            <button style={BUTTON_STYLES}>Purchase for {usPrice(selectedSpot.price)}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
