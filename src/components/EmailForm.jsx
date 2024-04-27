import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailForm() { // <--- Hozzáadva a function kulcsszó
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS konfiguráció
    const templateParams = {
      from_name: `${name} ${lastName}`,
      email: email,
    };

    // Email küldése EmailJS segítségével
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email elküldve!', response.status, response.text);
        // Sikeres küldés esetén ide adhatók további teendők, pl. felhasználó értesítése stb.
      })
      .catch((error) => {
        console.error('Hiba történt az email küldése közben:', error);
        // Hibakezelés, pl. felhasználó értesítése stb.
      });

    // Űrlap ürítése
    setName('');
    setLastName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Név:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Vezetéknév:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email cím:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Küldés</button>
    </form>
  );
};

export default EmailForm;
