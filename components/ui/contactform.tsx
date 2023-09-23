'use client'

interface FormData {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
}

import { Input } from './input'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Textarea } from './textarea'
import { Button } from './button'
import PurpleStar from '../purplestar/purpleStar'
import StarGif from '../starGif/stargif'



const Contactform = () => {

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
    <section className='relative'>
      <div className='z-20 absolute top-0 left-0  md:-left-20'>
        <PurpleStar />
      </div>
      <div className='z-20 absolute -bottom-16 left-36 md:left-[700px]'>
        <PurpleStar />
      </div>
      <div className='z-20 absolute md:top-10 top-56 right-32'>
        <StarGif />
      </div>
      <div className='z-20 absolute top-56 -right-20'>
        <StarGif />
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-10 px-10 lg:px-20  py-20 bg-gray-500/5 rounded-md bg-opacity-10'>
        <h1 className='text-[20px] font-semibold text-primary'>Questions or need assistance? <br />
          Let us know about it
        </h1>
        <div>
          {response && response.first_name && (
            <div className="text-red-500">{response.first_name.join(', ')}</div>
          )}
          <Input type="text" placeholder='First Name' name="first_name" value={formData.first_name} onChange={handleChange} />
        </div>
        <div>
          {response && response.email && (
            <div className="text-red-500">{response.email.join(', ')}</div>
          )}
          <Input type="text" id='email' placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
        </div>
        {/* <div>
          <Input type="text" placeholder='Phone number' name="phone_number" value={formData.phone_number} onChange={handleChange} />
        </div> */}
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
        <Button type='submit' size={'lg'} className='w-[172px] h-[53px] mx-auto px-10 py-6'>Submit</Button>
      </form>
    </section>

  )
}

export default Contactform