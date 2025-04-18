import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="contact-page-map" style={{ paddingTop: '40px' }}>
                <h2
                    style={{
                       
                        textAlign: 'center',
                        fontSize: '32px',
                        fontWeight: 'bold',
                        marginBottom: '80px',
                        marginTop: '-60px',
                        color: '#333',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = 'transparent';
                        e.target.style.backgroundImage = 'linear-gradient(90deg, #00C9FF, #92FE9D)';
                        e.target.style.backgroundClip = 'text';
                        e.target.style.webkitBackgroundClip = 'text';
                        e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = '#333';
                        e.target.style.backgroundImage = '';
                        e.target.style.transform = 'scale(1)';
                    }}
                >
                    Our Location
                </h2>

                <div className="our-location">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1635372333444!2d-0.12463748407474174!3d51.51466177963645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cd9d8f206b%3A0x20b0f36d8c1d5407!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2suk!4v1713438650000!5m2!1sen!2suk"
                        height="600"
                        width="100%"
                        style={{ border: 0, marginTop: '-60px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMap;
