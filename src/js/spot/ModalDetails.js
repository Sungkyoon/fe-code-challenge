import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const MODAL_STYLES = {
  position: 'fixed',
  top: '30%',
  left: '45%',
  backgroundColor: '#FFFFFF',
  padding: '50px',
  height: '400px',
  width: '650px',
  borderRadius: '10px',
  zIndex: 5,
};

const BACKGROUND_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#003080',
  zIndex: -1,
};

const X_BUTTON = {
  position: 'absolute',
  right: -3,
  top: 5,
};

const BOOK_BUTTON = {
  color: 'white',
  backgroundColor: '#0082FF',
  border: 'none',
  borderRadius: '5px',
  height: '40px',
  width: '160px',
};

const usPrice = (price) => {
  const newPrice = Math.floor(price / 1e2);

  return newPrice.toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD',
  });
};

export default function ModalDetails({ open, setIsOpen, selectedSpot }) {
  if (!open) {
    return null;
  }
  console.log(selectedSpot);

  return selectedSpot ? (
    <>
      <div style={BACKGROUND_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={X_BUTTON}>
          {/* <button onClick={() => setIsOpen(false)}>X</button> */}
          <Button
            style={{ height: '5px', width: '10px' }}
            onClick={() => setIsOpen(false)}
          >
            {' '}
            X
          </Button>
        </div>
        <div style={{ marginLeft: '35%' }}>
          <h1>Spot Details</h1>
        </div>
        <div style={{ marginTop: '5px' }}>
          <h1>{selectedSpot.title}</h1>
        </div>
        <p>{selectedSpot.description}</p>
        <div style={{ marginLeft: '30%', top: '85%', position: 'absolute' }}>
          <Link to={{ pathname: '/checkout', state: { selectedSpot } }}>
            <button style={BOOK_BUTTON}>
              {usPrice(selectedSpot.price)} | Book It!
            </button>
          </Link>
        </div>
      </div>
    </>
  ) : null;
}
