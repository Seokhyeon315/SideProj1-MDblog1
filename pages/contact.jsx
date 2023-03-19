import React, { useState } from "react";
// import nodemailer from "nodemailer";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const { name, email, subject, message } = contactObject;

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, subject, message }),
            });
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error(error);
            alert("Email failed to send.");
        }
    };


    return (
        <div className="max-w-[1240px] m-auto p-4 h-screen">
            <h1 className="mt-20 text-2xl text-center font-semibold p-4">Contact</h1>
            <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                    <input className="border shadow-lg p-3" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input className="border shadow-lg p-3" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <input className="border shadow-lg p-3 w-full my-2" type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                <textarea className="border shadow-lg p-3 w-full" cols="30" rows="10" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
                <button className="border shadow-lg p-3 w-full hover:bg-gray-300" type="submit">Submit</button>
            </form>
        </div>

    );
};

export default Contact;
