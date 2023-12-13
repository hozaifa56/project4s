import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Generator() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xkadug6', 'template_gejvqeg', form.current, 'zSlJSVTzopBIdGITc')
      .then(
        (result) => {
          console.log(result.text);
          // Show a success toast notification
          toast.success('Email sent successfully!', {
            position: 'top-right',
            autoClose: 3000, // Close the notification after 3 seconds
          });
        },
        (error) => {
          console.log(error.text);
          // Show an error toast notification
          toast.error('Error sending email. Please try again later.', {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='sb container my-3 mx-5 '>
          <label>Name:</label>
          <input id='textbox' required type="text" name="user_name" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>Email:</label>
          <input required type="email" id='textbox' name="user_email" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>Highest level of Education:</label>
          <input required type="text" id='textbox' name="high_edu" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>Institute where you completed your highest level of education:</label>
          <input required type="text" id='textbox' name="high_institute" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>What did you study?:</label>
          <input required type="text" id='textbox' name="high_field" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>Do you have any relevant work experience? :</label>
          <input required type="text" id='textbox' name="work_experience" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>What institute did you get admitted to in Canada?:</label>
          <input required type="text" id='textbox' name="applied_institute" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>What is your program of study in Canada?:</label>
          <input required type="text" id='textbox' name="applied_program" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>Which country are you applying from?:</label>
          <input required type="text" id='textbox' name="home_country" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>What are your future goals?:</label>
          <input required type="text" id='textbox' name="goals" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>English Scores - Listening:</label>
          <input required type="number" id='numbox' name="english_listening" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>English Scores - Reading:</label>
          <input required type="number" id='numbox' name="english_reading" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>English Scores - Speaking:</label>
          <input required type="number" id='numbox' name="english_speaking" /></div>
        <div className='sb container my-3 mx-5 '>
          <label>English Scores - Writing:</label>
          <input required type="number" id='numbox' name="english_writing" /></div>

        <div className='sb container my-3 mx-5 '>
          <label>Did you pay your first year tuition?:</label>
          <select name="tuition_done" id='numbox' required>
            <option value="have">Yes</option>
            <option value="have not">No</option>
          </select></div>

        <div className='sb container my-3 mx-5 '>
          <label>How much tuition fee did you pay?:</label>
          <input required type="number" id='numbox' name="tuition_fee" /></div>

        <div className='sb container my-3 mx-5 '>
          <label>Did you do a GIC?:</label>
          <select name="gic_done" id='numbox' required>
            <option value="have">Yes</option>
            <option value="don't have">No</option>
          </select></div>

        <div className='sb container my-3 mx-5 '>
          <label>How much did you pay towards GIC?:</label>
          <input required type="number" id='numbox' name="gic_fee" /></div>


        <input required type="submit" className='btn btn-info my-3' value="Generate SOP" />


      </form>
      <ToastContainer />
    </div>
  )
}
