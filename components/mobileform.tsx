'use client'


interface FormData {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
}


import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Mobileform = () => {




  const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    first_name: '',
    message: '',
  });

  const [response, setResponse] = useState<{ email?: string[]; first_name?: string[]; message?: string[] } | null>(null); // Type assertion added
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Type assertion added

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    try {
      const apiResponse = await fetch('https://backend.getlinked.ai/hackathon/contact-form', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(formData),
        redirect: 'follow',
      });

      const data = await apiResponse.json();

      if (apiResponse.ok) {
        setSuccessMessage('Message sent successfully!');
        // console.log(data)
        setTimeout(() => {
          setFormData({
            email: '',
            phone_number: '',
            first_name: '',
            message: '',
          });
          setSuccessMessage(null);
        }, 5000);
      } else {
        setResponse(data);

        // Clear response and success message after 5 seconds
        setTimeout(() => {
          setResponse(null);
          setSuccessMessage(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage(null);
    }
  };


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-10 pt-10  pb-20'>
      <div>
        {response && response.first_name && (
          <div className="text-red-500">{response.first_name.join(', ')}</div>
        )}
        <Input type="text" placeholder='Team&apos;s Name' name="first_name" value={formData.first_name} onChange={handleChange} />
      </div>
      <div>
        <Input type="text" placeholder='Topic' name="phone_number" value={formData.phone_number} onChange={handleChange} />
      </div>
      <div>
        {response && response.email && (
          <div className="text-red-500">{response.email.join(', ')}</div>
        )}
        <Input type="text" id='email' placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div>
        {response && response.message && (
          <div className="text-red-500">{response.message.join(', ')}</div>
        )}
        <Textarea placeholder='Message' name="message" value={formData.message} onChange={handleChange} />
      </div>
      {successMessage && (
        <div className="text-green-500">
          <p>{successMessage}</p>
        </div>
      )}
      <Button type='submit' size={'lg'} className='w-fit mx-auto px-10 py-6'>Submit</Button>
    </form >
  )
}

export default Mobileform