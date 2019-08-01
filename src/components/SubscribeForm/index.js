import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from './styles.css';

function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => await addToMailchimp(email);

  const handleChange = event => setEmail(event.target.value);

  return (
    <form className={styles.form}>
      <input type="email" onChange={handleChange} value={email} />
      <button type="button" onClick={handleSubmit}>
        Send
      </button>
    </form>
  );
}

export default SubscribeForm;
