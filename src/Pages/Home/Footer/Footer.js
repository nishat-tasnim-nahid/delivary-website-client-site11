import React from 'react';
import './Footer.css'

const Footer = () => {
   
    return (
        <div className='footer'>
            <div>
                <h4><b>HEXA in ONE</b></h4>
                <p>ISO 9001: 2015, ISO 27001: 2013 Certified Company <br />
                    CIN: U638740DL2071PF61234</p>
            </div>
            <div>
                <h5><b>Company</b></h5>
                <p>About us <br />Services <br />News <br />Blog</p>

            </div>
            <div>
                <h5><b>Quick Links</b></h5>
                <p>Domestic Courier Services<br />
                    Full-Truckload Services<br />
                    Partial-Truckload Services</p>
            </div>

            <div>
                <h5><b>Information Security Policy</b></h5>
                <p>Delhivery is committed to safeguarding the confidentiality, integrity and availability of all physical and electronic information assets of the organization. We ensure that the regulatory, operational and contractual requirements are fulfilled.</p>
            </div>

        </div>
    );
};

export default Footer;