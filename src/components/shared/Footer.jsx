import React from 'react'
import logo from '../../assets/venets_logo.jpg'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import googleplus from '../../assets/googleplus.png'
import { Divider, Group, Text } from '@mantine/core'
function Footer() {
    return (
        <footer className="site-footer" style={{ background: "#270419" }}>
            <div className="section-wrapper">
                <div className="footer-top-wrapper">
                    <div className="footer-col">
                        <a href="#">
                            <img src={logo} alt="" width="70px" height="70px" />
                        </a>
                    </div>
                    <div className="footer-col links">
                        <div className="link-col">
                            <a href="/" className='text-white'>Home</a>
                        </div>
                        <div className="link-col">
                            <a href="/aboutus" className='text-white'>About Ventes</a>
                        </div>
                        <div className="link-col">
                            <a href="/projects" className='text-white'>Projects</a>
                        </div>
                        <div className="link-col">
                            <a href="/contactus" className='text-white'>Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-wrapper mb-3">
                    <div className="footer-col about">
                        <p className='pt-5 text-white'>As your Launch & Strategy partner, we collaborate with developers to elevate projects, ensuring innovative solutions and market-leading strategies.</p>
                    </div>
                    <div className="footer-col get-in-touch">
                        {/* <div className="footer-sub-header">Get In Touch</div> */}
                        <div className="footer-contact-wrapper">
                            <div className="footer-contact-col footer-contact-info">
                            <div className="footer-label text-white">Contact</div>
                                <div className="footer-contact-col-item">
                                    <div className="footer-contact mt-0">
                                        <a href="#" className="email text-white">+91-9071288899</a>
                                    </div>
                                </div>
                                <div className="footer-contact-col-item">
                                    <div className="footer-contact mt-0">
                                        <a href="#" className="email text-white">ventesyes@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-contact-col">
                                <div className="footer-label text-white">Address</div>
                                <div className="footer-contact">
                                    <a href="#" className='text-white'># 459, 2nd Floor, KIRAN Towers, 1st Block
                                        Koramangala, HSR Layout 5th Sector
                                        Bengaluru. INDIA, KARNATAKA, 560034</a>
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
                                <img src={twitter} alt='img' width="20px" height="20px" />
                            </a>
                            <a href="#" target="_blank" className='px-3'>
                                <img src={googleplus} alt='img' width="20px" height="20px" />
                            </a>
                            <a href="#" target="_blank">
                                <img src={facebook} alt='img' width="20px" height="20px" />
                            </a>
                            <a href="#" target="_blank" className='px-3'>
                                <img src={linkedin} alt='img' width="20px" height="20px" />
                            </a>
                        </div>
                        <Text c="white">Designed by <a href="http://incigol.in/" target="_blank">INCIGOL</a></Text>
                    </Group>

                </div>
            </div>
        </footer>
    )
}

export default Footer