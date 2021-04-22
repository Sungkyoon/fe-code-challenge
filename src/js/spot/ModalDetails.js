import React from 'react';

export default function ModalDetails({ open, setIsOpen }) {
  if (!open) {
    return null;
  }

  return (
    <div>
      <button onClick={() => setIsOpen(false)}>X</button>
    </div>
  );
}
