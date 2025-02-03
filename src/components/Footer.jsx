import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-white py-12 px-4 sm:px-6 lg:px-16'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Funiro Section */}
                    <div>
                        <h3 className='text-lg font-bold mb-4'>Funiro.</h3>
                        <address className='not-italic text-sm text-gray-600 leading-relaxed'>
                            400 University Drive Suite 200 Coral Gables,<br />
                            FL 33134 USA
                        </address>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h4 className='text-sm text-gray-500 mb-6'>Links</h4>
                        <nav className='flex flex-col space-y-4'>
                            <Link to="/" className='text-sm hover:text-gray-700'>Home</Link>
                            <Link to="/shop" className='text-sm hover:text-gray-700'>Shop</Link>
                            <Link to="/about" className='text-sm hover:text-gray-700'>About</Link>
                            <Link to="/contact" className='text-sm hover:text-gray-700'>Contact</Link>
                        </nav>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h4 className='text-sm text-gray-500 mb-6'>Help</h4>
                        <nav className='flex flex-col space-y-4'>
                            <Link to="/payment-options" className='text-sm hover:text-gray-700'>Payment Options</Link>
                            <Link to="/returns" className='text-sm hover:text-gray-700'>Returns</Link>
                            <Link to="/privacy-policies" className='text-sm hover:text-gray-700'>Privacy Policies</Link>
                        </nav>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h4 className='text-sm text-gray-500 mb-6'>Newsletter</h4>
                        <div className='flex border-b border-gray-300'>
                            <input
                                type="email"
                                placeholder='Enter Your Email Address'
                                className='flex-grow bg-transparent text-sm py-2 outline-none'
                            />
                            <button 
                                type="submit"
                                className='text-sm font-medium py-2 px-4'
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
                 {/* Horizontal divider */}
                 <div className='h-px bg-gray-200 my-8'></div>
                {/* Copyright */}
                <div className='mt-12'>
                    <p className='text-sm text-gray-600'>2023 funiro. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;