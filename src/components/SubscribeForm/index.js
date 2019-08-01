import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import './styles.css';

function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => await addToMailchimp(email);

  const handleChange = event => setEmail(event.target.value);

  return (
    <form className="form">
      <span className="title">Subscribe for latest updates</span>
      <p className="text">
        Sign Up for our newsletter and get notified when we publish new articles
        for free!
      </p>
      <input className="input" type="email" onChange={handleChange} value={email} />
      <button className="btn" type="button" onClick={handleSubmit}>
        Subscribe
      </button>
    </form>
  );
}

export default SubscribeForm;
