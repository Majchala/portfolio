import React, { useState } from 'react';
import './Contact.scss';
import Divider from '../assets/imgs/divider.png'

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send message');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText('Sending...');
    setErrorMessage('');
    
    const formData = new FormData(event.target);
    formData.append('access_key', '1b0dab29-31a9-4489-b72b-e3cd81d63ece');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setButtonText('Sent ✅');
        event.target.reset();
        setTimeout(() => setButtonText('Send message'), 3000);
      } else {
        throw new Error(data.message || 'Something went wrong 😔');
      }
    } catch (error) {
      setButtonText('Send message');
      setErrorMessage(error.message);
    }
  };

  return (
    <section className='contact'>
      <form onSubmit={onSubmit}>
        <img src={Divider} alt='Divider' />

        <h2 className='section_title'>Let's connect</h2>
        <div className='input_box'>
          <input type='text' className='field' placeholder='Your name' name='name' required />
        </div>

        <div className='input_box'>
          <input type='email' className='field' placeholder='Your email' name='email' required />
        </div>

        <div className='input_box'>
          <textarea name='message' className='field message' placeholder='Your message' required />
        </div>

        <button type='submit'>{buttonText}</button>
        {errorMessage && <div className='error_message'>{errorMessage}</div>}
      </form>
    </section>
  );
};

export default Contact;