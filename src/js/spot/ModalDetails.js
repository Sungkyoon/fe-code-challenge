import React from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '40%',
  left: '50%',
  backgroundColor: '#FFFFFF',
  padding: '50px',
  height: '400px',
  width: '600px',
  borderRadius: '10px',
  zIndex: 5,
};

export default function ModalDetails({ open, setIsOpen, selectedSpot }) {
  if (!open) {
    return null;
  }
  console.log(selectedSpot);

  return selectedSpot ? (
    <div style={MODAL_STYLES}>
      <button onClick={() => setIsOpen(false)}>X</button>
      <h1>Spot Details</h1>
      <h1>{selectedSpot.title}</h1>
      <p>{selectedSpot.description}</p>
      <button>{selectedSpot.price} | Book It!</button>
    </div>
  ) : null;
}
