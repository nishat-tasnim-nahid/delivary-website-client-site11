import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about'>
            <br /><br /><br />
            <h2>About Us</h2>

            <div className='aboutFirst'>
                <div>
                    <h2>WHO ARE WE?</h2>
                    <p>According to the RedSeer Report, Delhivery is the largest and fastest growing fully-integrated player in India by revenue in Fiscal 2021. We aim to build the operating system for commerce, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge engineering and technology capabilities.We provided supply chain solutions to a diverse base of over 21000 active customers such as e-commerce marketplaces, direct-to-consumer e-tailers and enterprises and SMEs across several verticals such as FMCG, consumer durables, consumer electronics, lifestyle, retail, automotive and manufacturing.</p>
                </div>
                <div>
                    <img className='aboutImg' src="https://blog.bolt.eu/wp-content/uploads/2020/03/business-blog_1200x628-1024x536.png" alt="" />
                </div>
            </div>
            <div className='aboutFirst'>
                <div>
                    <img className='aboutImg' src="https://www.allrideapps.com/wp-content/uploads/2020/08/Webp.net-compress-image-2-scaled.jpg" alt="" />
                </div>
                <div>
                    <h2>OUR MISSION</h2>
                    <p>Our mission is to enable customers to operate flexible, reliable and resilient supply chains at the lowest costs.We provided supply chain solutions to a diverse base of over 21000 active customers such as e-commerce marketplaces, direct-to-consumer e-tailers and enterprises and SMEs across several verticals such as FMCG, consumer durables, consumer electronics, lifestyle, retail, automotive and manufacturing. We aim to build the operating system for commerce, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge engineering and technology capabilities.We provided supply chain solutions to a diverse base of over 21000 active customers such as e-commerce marketplaces,
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;