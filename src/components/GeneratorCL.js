import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function GeneratorCL() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xkadug6', 'template_echl80a', form.current, 'zSlJSVTzopBIdGITc')
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
                    <label>Phone Number:</label>
                    <input required type="number" id='numbox' name="phone" /></div>
                <div className='sb container my-3 mx-5 '>
                    <label>Hiring manager's name::</label>
                    <input required type="text" id='textbox' name="hr_name" /></div>
                <div className='sb container my-3 mx-5 '>
                    <label>Company Name:</label>
                    <input id='textbox' required type="text" name="company_name" /></div>
                <div className='sb container my-3 mx-5 '>
                    <label>Company Address:</label>
                    <input id='textbox' required type="text" name="company_address" /></div>
                <div className='sb container my-3 mx-5 '>
                    <label>Job position title:</label>
                    <input id='textbox' required type="text" name="job_position" /></div>
                <div className='sb container my-3 mx-5 '>
                    <label>Mention a unique skill or specilization that you have:</label>
                    <input id='textbox' required type="text" name="skill" /></div>
                <div className='sb container my-3 mx-5 '>
                    <label>name of current company or company where you did internship/training:</label>
                    <input id='textbox' required type="text" name="company_curr" /></div>
                <div className='sb container my-3 mx-5 '>
                    <label>Goal achieved at current company :</label>
                    <input id='textbox' required type="text" name="goal_curr" /></div>
                <div className='sb container my-3 mx-5 '>
                    <label>Value increased by(in %) :</label>
                    <input id='numbox' required type="number" name="value_curr" /></div>


                <input required type="submit" className='btn btn-info my-3' value="Generate Cover Letter" />
            </form>
            <ToastContainer />

        </div>
    )
}
