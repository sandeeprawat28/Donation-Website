import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import "./Home.css";


function Home() {
  return (
        <div className="Home">
                      <ReactBootStrap.Carousel>
                        <ReactBootStrap.Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100 carousel"
                            src={"https://warringtonanimalwelfare.org.uk/sites/default/files/Animal%20Rescue_1.jpeg"}
                            alt="img"
                          />
                      </ReactBootStrap.Carousel.Item>

                      <ReactBootStrap.Carousel.Item>
                        <img
                          className="w-100 carousel"
                          src={"https://images.pexels.com/photos/11636636/pexels-photo-11636636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                          alt="img"
                        />
                      </ReactBootStrap.Carousel.Item>

                      <ReactBootStrap.Carousel.Item>
                        <img
                          className="d-block w-100 carousel"
                          src={"https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"}
                          alt="img"
                        />  
                      </ReactBootStrap.Carousel.Item>

                      <ReactBootStrap.Carousel.Item>
                        <img
                          className="d-block w-100 carousel"
                          src={"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"}
                          alt="img"
                        />
                      </ReactBootStrap.Carousel.Item>

                      <ReactBootStrap.Carousel.Item>
                        <img
                          className="d-block w-100 carousel"
                          src={"https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"}
                          alt="img"
                        />
                      </ReactBootStrap.Carousel.Item>

                      <ReactBootStrap.Carousel.Item>
                        <img
                          className="d-block w-100 carousel"
                          src={"https://images.unsplash.com/photo-1573828257838-2cab0d1c9f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"}
                          alt="img"
                        />
                      </ReactBootStrap.Carousel.Item>
                    </ReactBootStrap.Carousel>

                    <div className='donate'>
                        <ReactBootStrap.Modal.Title className='title'>
                            BECOME DONOR
                        </ReactBootStrap.Modal.Title>
                        <ReactBootStrap.Modal.Body>
                            <p className='p'> 
                              Give a bit. Change a lot. A donation is a gift for charity, humanitarian aid, or to benefit a cause. 
                              A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles. 
                              A donation may satisfy medical needs such as blood or organs for transplant. Protects animals across the globe. World Animal Protection's objectives include helping people understand the critical importance of good animal welfare, 
                              encouraging nations to commit to animal-friendly practices, and building the scientific case for the better treatment of animals. They are global in a sense that they have consultative status at the Council of Europe and collaborate with national governments, 
                              the United Nations, the Food and Agriculture Organization and the World Organization for Animal Health.
                            </p>
                            <div className='donate-btn-1'>
                              <ReactBootStrap.Button
                                className="btn"
                                href= {"./Donationform"}
                                variant="success"
                              >
                              Donate
                              </ReactBootStrap.Button>
                            </div>
                        </ReactBootStrap.Modal.Body>
                    </div>
                    <div className='description'>
                        <ReactBootStrap.Modal.Title className='title'>
                            BECOME VOLUNTEER
                        </ReactBootStrap.Modal.Title>
                        <ReactBootStrap.Modal.Body>
                            <p className='p'> 
                                There are so many takers for pedigree dogs. But our Desi Indian breed look upto you.. 
                                Make a difference! You will primarily socialize with puppies, cats and dogs in addition to walking the dogs.
                                It’s essential to teach dogs and cats to trust people if they are to find their fur-ever homes. 
                                Almost all of our animals are ex-street dogs and cats who have never been indoors and need to learn to feel comfortable around people. 
                                We strongly encourage volunteers to spend a month or longer at our rehab facility at anywhere in the world. 
                                The more time they spend with the animals, the closer
                            </p>
                        </ReactBootStrap.Modal.Body>

                        <ReactBootStrap.Modal.Title className='title'>
                            OUR VISIONS
                        </ReactBootStrap.Modal.Title>
                        <ReactBootStrap.Modal.Body>
                            <p className='p'>
                                Animal NGO is founded by visionaries who felt the need
                                to build a free of cost medical facility for the stray
                                animals where the best, most advanced, ethical and
                                highly skilled medical care is readily available.
                                Main mission is to connect and empower animal protectors to achieve animal rights by advocacy, networking and capacity building to create a high-impact  which will continually address ongoing animal issues.
                            </p>
                        </ReactBootStrap.Modal.Body>

                        <ReactBootStrap.Modal.Title className='title'>
                            ADOPT A PET
                        </ReactBootStrap.Modal.Title>
                        <ReactBootStrap.Modal.Body>
                            <p className='p'>
                                There are not enough homes for all the animals that are born every year. 
                                Adopting from a shelter helps weaken the pet overpopulation cycle. 
                                Each year 8 to 12 million dogs, cats, puppies and kittens are euthanized because there are simply not enough homes for them.    
                                Our shelter offers a variety that you won’t find anywhere else. We have specific breeds and also the greatest mutts you’ll ever find. 
                                We have more than 6,000 animals come through our doors every year.If around 1% people will come up then each and every pets will be adopted,their live will be in the safe hand. 
                            </p>
                        </ReactBootStrap.Modal.Body>
                    </div>
        </div>
  )
}

export default Home
