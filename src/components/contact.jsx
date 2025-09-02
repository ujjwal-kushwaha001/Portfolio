import React, { useEffect, useState } from "react";
import aesthetic from "../assets/aesthetic.jpg";
import {toast} from 'react-toastify'

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const FormSubmit = async(event) => {
    event.preventDefault();
    const UserData = {
      name: name,
      email: email,
      message: message,
    };

    setTimeout(async() => {

      await fetch('https://formspree.io/f/xeollkrz', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserData),
      }).then(response =>{
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} `)
        }
  
        return response.text()
      }).then(data =>{
        console.log('POST request successful:', data);
      })
  }, 1000);

    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    <>
      <div id="contact" className="contact-info w-80 m-auto">
        <h2>Contact</h2>
        <div className="contact-info d-flex w-100 min-vh-40">
          <div className="contact-left pt-5 px-2">
            <h5>GET IN TOUCH -</h5>
            <p className="gap-2 d-flex align-items-center">
              <i className="fa-solid fa-envelope"></i>{" "}
              ujjwalkushwahatech@gmail.com
            </p>
            <p className="gap-2 d-flex align-items-center">
              <i className="fa-solid fa-mobile"></i> +91 6352994542
            </p>
            <p className="gap-2 d-flex align-items-center">
              <i className="fa-solid fa-location-dot"></i>Laxminagar society,
              naroda, ahmedabd, Gujarat - 382330
            </p>
          </div>
          <div className="contact-right d-flex justify-content-center align-items-center">
            <div className="card border border-secondary position-relative top-40px">
              <form method="POST" onSubmit={FormSubmit}>
                <div className="personal-details d-flex flex-column justify-content-center align-items-center my-4 gap-2">
                  <h4 className="mx-4 py-3">SAY SOMETHING</h4>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-1 w-75 py-2"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-1 w-75 py-2"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="px-1 w-75 py-2"
                    name="message"
                    id="message"
                    cols={43}
                    rows={5}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-5 w-75 border bg-primary py-2"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
