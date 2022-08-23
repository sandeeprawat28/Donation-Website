import React, { useState } from 'react'
import './Contact.css'
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from 'sweetalert2';



function Contact() {

    const[user, setUser] = useState ({
        name: "",
        email: "",
        phone: "",
        address: "",
        subject: "",
        message: ""
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, address, subject, message } = user;

    if (name && email && phone && address && subject && message) {
        const res = await fetch (
            'https://payment-integration-28-default-rtdb.firebaseio.com/paymentDB.json', 
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    name,
                    email,
                    phone,
                    address,
                    subject,
                    message,
                }),
            }
        );

        if(res) {
            setUser ({
                name: "",
                email: "",
                phone: "",
                address: "",
                subject: "",
                message: "",
            });
            swal.fire ({
                title: "Great!",
                text: "Your data stored successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
            });
        } 
        
    } else {
            swal.fire ({
                title: "Oops...",
                text: "Please fill all the required data",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        }

    };


  return (
    <div className='contact'>
        <h2 class="contact-h2">Contact us</h2>
        <p class="contact-p">Do you have any questions? Please do not hesitate to contact us directly.</p>
            <div class="row">
                <div class="">
                    <form id="contact-form" name="contact-form" action="#" method="POST">
                        <div class="row">                 
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="name" class="">Your name</label>
                                    <input 
                                        type="text" 
                                        PlaceHolder="Enter your name" 
                                        id="name" 
                                        value={user.name}
                                        onChange={getUserData}
                                        name="name" 
                                        class="form-control"
                                        required
                                        />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="email" class="">Your email</label>
                                    <input 
                                        type="text" 
                                        id="email" 
                                        PlaceHolder="Enter your email" 
                                        name="email" 
                                        value={user.email}
                                        onChange={getUserData}
                                        class="form-control" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="phone" class="">Your phone no.</label>
                                    <input 
                                        type="text" 
                                        id="phone" 
                                        PlaceHolder="Enter your phone no." 
                                        name="phone" 
                                        maxLength='10'
                                        value={user.phone}
                                        onChange={getUserData}
                                        class="form-control" 
                                        required
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="address" class="">Your address</label>
                                    <input 
                                        type="text" 
                                        id="address" 
                                        PlaceHolder="Enter your address" 
                                        name="address" 
                                        value={user.address}
                                        onChange={getUserData}
                                        class="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <label for="subject" class="">Subject</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        PlaceHolder="What is your subject?" 
                                        name="subject" 
                                        value={user.subject}
                                        onChange={getUserData}
                                        class="form-control" 
                                        maxLength='200'
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form">
                                    <label for="message">Your message</label>
                                    <textarea 
                                        type="text" 
                                        id="message" 
                                        PlaceHolder="Your message" 
                                        name="message" 
                                        value={user.message}
                                        onChange={getUserData}
                                        rows="2" 
                                        maxLength='150'
                                        class="form-control md-textarea"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='donate-btn-1'>
                            <ReactBootStrap.Button
                            className="btn"
                            variant="success"
                            onClick={postData}
                            >
                            Submit
                            </ReactBootStrap.Button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact