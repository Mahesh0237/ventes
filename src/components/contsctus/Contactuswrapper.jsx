import React from 'react'
import contactus from '../../assets/contactus.avif'
import { Button, Container, Grid } from '@mantine/core'
function Contactuswrapper() {
    return (
        <>
            <main className="contact-page margin-top-page" >
                <Container size={1600} my={50}>
                    <Grid style={{ marginTop: "200px" }}>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <img src={contactus} alt='img' />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <div className="form-part">
                                <div className="form-wrapper">
                                    <form >
                                        <div className="form-row">
                                            <div className="form-row-item">
                                                <label for="name">Name <span>*</span></label>
                                                <input placeholder="Enter your full name" required />
                                            </div>
                                            <div className="form-row-item">
                                                <label for="email">Email <span>*</span></label>
                                                <input placeholder="Enter your email address" required />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-row-item">
                                                <label for="phone">Phone number <span>*</span></label>
                                                <input placeholder="Enter your phone number" required />
                                            </div>
                                            <div className="form-row-item">
                                                <label for="subject">Subject <span>*</span></label>
                                                <input placeholder="Enter the date you are free" required />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-row-full">
                                                <label for="message">Message</label>
                                                <textarea cols="40" rows="2" placeholder="Tell us a little bit about your inquiry"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-row form-submit">
                                            <div className="form-row-full">
                                                <Button fullWidth size='lg' color='pink'>Submit</Button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Contactuswrapper