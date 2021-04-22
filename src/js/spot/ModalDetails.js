import React from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '30%',
  left: '45%',
  backgroundColor: '#FFFFFF',
  padding: '50px',
  height: '400px',
  width: '600px',
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
        <button onClick={() => setIsOpen(false)}>X</button>
        <h1>Spot Details</h1>
        <h1>{selectedSpot.title}</h1>
        <p>{selectedSpot.description}</p>
        <button>{usPrice(selectedSpot.price)} | Book It!</button>
      </div>
    </>
  ) : null;
}
