'use client'


import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Button } from './ui/button';
import Img from '../public/assets/images/congratulation.png'
import Image from 'next/image';
import Link from 'next/link';


const RegistrationForm: React.FC = () => {
  // Form fields
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [teamName, setTeamName] = useState<string>('');
  const [groupSize, setGroupSize] = useState<number | "" | null>(null);
  const [projectTopic, setProjectTopic] = useState<string>('');
  const [category, setCategory] = useState<number | "" | null>(null);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState<boolean>(false);

  // Dropdown options
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  // Fetch categories 
  useEffect(() => {
    fetch("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  // State variable to track the success status
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // State variable to store error message
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorTimeoutId, setErrorTimeoutId] = useState<number | null>(null);


  // Function to display an error message with a timeout
  const displayErrorMessage = (message: string, timeout: number) => {
    setErrorMessage(message);

    // Set a timeout to clear the error message after the specified time (5 seconds in milliseconds)
    const timeoutId = window.setTimeout(() => {
      setErrorMessage('');
    }, timeout);

    // Store the timeout ID in state for later cleanup
    setErrorTimeoutId(timeoutId);
  };

  // Function to open the modal
  const openModal = () => {
    setIsSuccess(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsSuccess(false);
  };


  const resetForm = () => {
    setEmail('');
    setPhoneNumber('');
    setTeamName('');
    setGroupSize(1);
    setProjectTopic('');
    setCategory(0);
    setPrivacyPolicyAccepted(false);
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      email,
      phone_number: phoneNumber,
      team_name: teamName,
      group_size: groupSize,
      project_topic: projectTopic,
      category: category,
      privacy_poclicy_accepted: privacyPolicyAccepted, // API response you provided uses the key "privacy_poclicy"_accepted (with a typo)
    };

    try {
      const response = await fetch("https://backend.getlinked.ai/hackathon/registration", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.email && data.email[0] === 'applicant with this email already exists.') {
        // Handle the case where the email already exists
        console.error('Error: Applicant with this email already exists');
        displayErrorMessage('An applicant with this email already exists. Please use a different email.', 5000); // Display for 5 seconds
      } else {
        // Handle the success case
        // console.log('Form submitted successfully:', data);
        openModal(); // Open the success modal
        resetForm(); // Reset the form fields
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Clear the error message and timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (errorTimeoutId) {
        clearTimeout(errorTimeoutId);
      }
    };
  }, [errorTimeoutId]);


  const [isCheckboxSelected, setIsCheckboxSelected] = useState<boolean>(false);



  return (
    <div className='text-white'>



      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6'>
          <div>
            <label>Team Name:</label>
            <input className='text-white flex h-[47px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-primary focus:bg-transparent focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter the name of your group' type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
          </div>
          <div>
            <label>Phone Number:</label>
            <input className='text-white flex h-[47px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-primary focus:bg-transparent focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter your phone number' type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input className='text-white flex h-[47px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-primary focus:bg-transparent focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter your email address' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Project Topic:</label>
            <input className='text-white flex h-[47px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-primary focus:bg-transparent focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='What is your group project topic' type="text" value={projectTopic} onChange={(e) => setProjectTopic(e.target.value)} required />
          </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-2 mt-8 gap-6'>
          <div className='flex flex-col col-span-2 sm:col-span-1'>
            <label>Category:</label>
            <select className='text-white flex h-[47px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-primary focus:bg-transparent focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' value={category || ""} onChange={(e) => setCategory(Number(e.target.value) || null)} required>
              <option value="">Select a category</option> {/* Initial value is an empty string */}
              {categories.map((cat) => (
                <option className='text-black' key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col col-span-1 '>
            <label>Group Size:</label>
            <select className='text-white flex h-[47px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:outline-primary focus:bg-transparent focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' value={groupSize || ""} onChange={(e) => setGroupSize(Number(e.target.value))} required>
              <option value="">Select</option>
              {[...Array(10)].map((_, index) => (
                <option className='text-black' key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <p className='text-xs text-primary italic py-3'>Please review your registration details before submitting</p>
          <label className='text-xs'>
            <input
              type="checkbox"
              checked={privacyPolicyAccepted}
              onChange={() => {
                setPrivacyPolicyAccepted(!privacyPolicyAccepted); // Toggle privacyPolicyAccepted
                setIsCheckboxSelected(!isCheckboxSelected); // Toggle isCheckboxSelected
              }}
              className='mr-3 accent-primary'
            />

            I agreed with the event terms and conditions  and privacy policy
          </label>
        </div>
        {errorMessage && <div className="error-message py-10">{errorMessage}</div>}
        <div className='flex justify-center items-center mt-5'>
          <Button size={'lg'} disabled={!isCheckboxSelected} type="submit" className='w-fit sm:w-full mx-auto'>Submit</Button>
        </div>
      </form>

      {/* React Modal for Success Message */}
      <Modal
        isOpen={isSuccess}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
        className='h-screen w-full flex justify-center items-center fixed'
      >
        <div className='flex flex-col  bg-[#150E28]/95 w-full h-full justify-center fixed items-center z-20 pt-10 p-10'>
          {/* <button onClick={closeModal}>Close</button> */}
          <div className='p-10 mt-20 text-white text-center border border-primary rounded flex justify-center items-center flex-col'>

            <Image
              src={Img}
              width={300}
              height={300}
              alt='congratulations'
            />
            <p className='text-[32px] font-semibold'>Congratulations <br />
              you have successfully Registered!</p>
            <p className='my-2 text-[14px] text-white'>Yes, it was easy and you did it! <br />
              check your mail box for next step</p>
            <Link href="/" className='w-full'>
              <Button className='w-full'>Back</Button>
            </Link>
          </div>
        </div>

      </Modal>
    </div>
  );
};

export default RegistrationForm;
