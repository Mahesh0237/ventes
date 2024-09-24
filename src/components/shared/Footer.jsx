import React from 'react'
import logo from '../../assets/venets_logo.jpg'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import googleplus from '../../assets/googleplus.png'
import { Divider, Group, Text } from '@mantine/core'
function Footer() {
    return (
        <footer className="site-footer" style={{ background: "rgb(48 5 31)" }}>
            <div className="section-wrapper">
                <div className="footer-top-wrapper">
                    <div className="footer-col">
                        <div style={{ width: "70px", height: "70px" }}>
                            <a href="/">
                                <img src={logo} alt="" width="100%" height="100%" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-col links">
                        <div className="link-col">
                            <a href="/" className='text-white'>Home</a>
                        </div>
                        <div className="link-col ">
                            <a href="/aboutus" className='text-white'>About Ventes</a>
                        </div>
                        <div className="link-col">
                            <a href="/projectsdetail" className='text-white'>Projects</a>
                        </div>
                        <div className="link-col">
                            <a href="/contactus" className='text-white'>Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-wrapper mb-3">
                    <div className="footer-col about">
                        <Text mt={25} c="white">As your Launch & Strategy partner, we collaborate with developers to elevate projects, ensuring innovative solutions and market-leading strategies.</Text>
                    </div>
                    <div className="footer-col get-in-touch">
                        {/* <div className="footer-sub-header">Get In Touch</div> */}
                        <div className="footer-contact-wrapper">
                            <div className="footer-contact-col footer-contact-info">

                                <div className="footer-label mb-2 text-white">Contact</div>
                                <div className="footer-contact-col-item">
                                    <div className="footer-contact mt-0">
                                        <Text mb={10} c="white">+91-9071288899</Text>
                                    </div>
                                </div>
                                <div className="footer-contact-col-item">
                                    <div className="footer-contact mt-0">
                                        <Text c="white">ventesyes@gmail.com</Text>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-contact-col">
                                <div className="footer-label text-white">Address</div>
                                <div className="footer-contact">
                                    <Text c="white"># 459, 2nd Floor, KIRAN Towers, 1st Block
                                        Koramangala, HSR Layout 5th Sector
                                        Bengaluru. INDIA, KARNATAKA, 560034</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-5'>
                    <Divider />
                    <Group justify='space-between' py={25}>
                        <Text size='sm' c="white">Copyrights © 2024 Ventes All Rights Reserved</Text>
                        <div>
                            <a href="#" target="_blank" >
                                <img src={twitter} alt='img' width="18px" height="18px" />
                            </a>
                            <a href="#" target="_blank" className='px-3'>
                                <img src={googleplus} alt='img' width="18px" height="18px" />
                            </a>
                            <a href="#" target="_blank">
                                <img src={facebook} alt='img' width="18px" height="18px" />
                            </a>
                            <a href="#" target="_blank" className='px-3'>
                                <img src={linkedin} alt='img' width="18px" height="18px" />
                            </a>
                        </div>
                        <Text size='sm' c="white">Designed by <a href="http://incigol.in/" target="_blank">INCIGOL</a></Text>
                    </Group>

                </div>
            </div>
        </footer>
    )
}

export default Footer