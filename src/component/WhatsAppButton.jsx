import { AlignVerticalJustifyCenter } from 'lucide-react';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+917010039610';
  const message = 'Hello, I have a query about weepek';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    backgroundColor: '#25D366',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: '9999px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    AlignVerticalJustifyCenter:'center',
    gap: '8px',
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
  };

 

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      aria-label="Chat with us on WhatsApp"
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1ebe57')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
    >
      <FaWhatsapp  className='text-2xl sm:text-3xl' />
      {/* <span className='font-Nunito hidden xl:inline lg:text-2xl'>Chat with us</span> */}
    </a>
  );
};

export default WhatsAppButton;
