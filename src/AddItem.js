import React, { useState } from 'react';
import { withFirestore } from 'react-firestore';

const AddItem = ({ firestore }) => {
  const [name, setName] = useState('');
  // Send the new item to Firebase
  const addItem = name => {
    firestore.collection('items').add({ name });
  };
  // The state every time an event happens
  const handleChange = event => {
    console.log('typing is happening')
    setName(event.target.value);
  };
  // Handle the click of the Add Item botton on the form
  const handleSubmit = event => {
    event.preventDefault();
    addItem(name);
  };
  return (
    <main>
      <header />
      <form onSubmit={handleSubmit}>
        <label>
          Add Item:
          <input value={name} type="text" id="name" onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Add item</button>
      </form>
      <footer />
    </main>
  );
};
// Wrap this component in the higher order componenet withFirestore to directly access the database
export default withFirestore(AddItem);