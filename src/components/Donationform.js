import React, { useState } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from 'sweetalert2';
import './Donationform.css';



function Donation_Form() {

    const[user, setUser] = useState ({
        name: "",
        email: "",
        phone: "",
        address: "",
        pay: ""
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, address, pay } = user;

    if (name && email && phone && address && pay) {
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
                    pay,
                }),
            }
        );

        if(res) {
            setUser ({
                name: "",
                email: "",
                phone: "",
                address: "",
                pay: "",
            });
            swal.fire ({
                title: "Great!",
                text: "Your data stored successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
                footer: '<a href="https://rzp.io/l/iyBd41jbgd"> Pay Now </a>'
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
    <div className='Donationform'>
            <h2 class="contact-h2">Donor Details</h2>
            <p class="contact-p">Make sure your details is currect</p>
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
                                        name="name" 
                                        value={user.name}
                                        onChange={getUserData}
                                        class="form-control"
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
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="email" class="">Your phone no.</label>
                                    <input 
                                        type="text" 
                                        maxLength='10' 
                                        id="phone" 
                                        PlaceHolder="Enter your phone no." 
                                        name="phone" 
                                        value={user.phone}
                                        onChange={getUserData}
                                        class="form-control" 
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="email" class="">Your address</label>
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
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="pay" class="">How much you want to pay?</label>
                                    <input 
                                        type="number" 
                                        id="pay" 
                                        PlaceHolder="$" 
                                        name="pay" 
                                        value={user.pay}
                                        onChange={getUserData}
                                        class="form-control" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='donate-btn-1'>
                            <ReactBootStrap.Button
                            className="btn"
                            href="#"
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

export default Donation_Form