'use client';

import { useState } from 'react';

interface ContactInfo {
    phone: string;
    email: string;
    website: string;
    address: string;
}

export default function ContactInformation() {
    const [contactInfo] = useState<ContactInfo>({
        phone: '+49 8245 96 788 0',
        email: 'office@oekvolt.com',
        website: 'www.oekovolt.de',
        address: 'Schlingener Straße 1a 86842 Türk­heim Deutschland',
    });

    const handleContactClick = (type: 'phone' | 'email' | 'website') => {
        switch (type) {
            case 'phone':
                window.location.href = `tel:${contactInfo.phone}`;
                break;
            case 'email':
                window.location.href = `mailto:${contactInfo.email}`;
                break;
            case 'website':
                window.open(`https://${contactInfo.website}`, '_blank');
                break;
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 lg:p-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-white/20">
                {/* Header */}
                <div className="text-center mb-3 sm:mb-4 lg:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#003473] to-[#003473]/80 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-2 lg:mb-3 shadow-lg">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">Get In Touch</h1>
                    <p className="text-gray-600 text-xs sm:text-sm px-2">
                        Ready to go solar? Contact us for expert consultation and personalized solutions for your energy needs.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-2 sm:space-y-2 lg:space-y-3">
                    {/* Phone */}
                    <div className="group bg-gradient-to-br from-[#003473]/10 to-[#003473]/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#003473]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-[#003473]/30 cursor-pointer">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#003473] to-[#003473]/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 mb-0.5">Phone Number</h3>
                                <button
                                    onClick={() => handleContactClick('phone')}
                                    className="text-[#003473] hover:text-[#003473]/80 font-semibold text-sm sm:text-sm lg:text-base transition-colors hover:underline block truncate w-full text-left"
                                >
                                    {contactInfo.phone}
                                </button>
                                <p className="text-gray-500 text-xs mt-0.5">Call us anytime during business hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="group bg-gradient-to-br from-[#669933]/10 to-[#669933]/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#669933]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-[#669933]/30 cursor-pointer">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#669933] to-[#669933]/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 mb-0.5">Email Address</h3>
                                <button
                                    onClick={() => handleContactClick('email')}
                                    className="text-[#669933] hover:text-[#669933]/80 font-semibold text-sm sm:text-sm lg:text-base transition-colors hover:underline block truncate w-full text-left"
                                >
                                    {contactInfo.email}
                                </button>
                                <p className="text-gray-500 text-xs mt-0.5">Send us an email for inquiries</p>
                            </div>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="group bg-gradient-to-br from-[#003473]/10 to-[#003473]/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#003473]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-[#003473]/30 cursor-pointer">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#003473] to-[#003473]/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 mb-0.5">Website</h3>
                                <button
                                    onClick={() => handleContactClick('website')}
                                    className="text-[#003473] hover:text-[#003473]/80 font-semibold text-sm sm:text-sm lg:text-base transition-colors hover:underline block truncate w-full text-left"
                                >
                                    {contactInfo.website}
                                </button>
                                <p className="text-gray-500 text-xs mt-0.5">Visit our website for more information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}