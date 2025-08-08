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
        email: 'office@oekovolt.com',
        website: 'www.oekovolt.de',
        address: '86842 Türk­heim Deutschland',
    });

    const handleContactClick = (type: 'phone' | 'email' | 'website' | 'address') => {
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
            case 'address':
                window.open('https://www.google.com/maps/place/Schlingener+Str.+1a,+86842+T%C3%BCrkheim,+Germany/@48.0392715,10.6300971,17z/data=!3m1!4b1!4m6!3m5!1s0x479c10f127868b51:0x3f5dc63d7a6aad65!8m2!3d48.039268!4d10.632672!16s%2Fg%2F11c5m3m5bw?entry=ttu', '_blank');
                break;
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 lg:p-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-white/20">
                {/* Header - Changed the icon here */}
                <div className="text-center mb-3 sm:mb-4 lg:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#003473] to-[#003473]/80 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-2 lg:mb-3 shadow-lg">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">Kontaktieren Sie uns</h1>
                    <p className="text-gray-600 text-xs sm:text-sm px-2">
                        Bereit für Solarenergie? Kontaktieren Sie uns für eine fachkundige Beratung und individuelle Lösungen für Ihren Energiebedarf.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-2 sm:space-y-2 lg:space-y-3">
                    {/* Phone */}
                    <div 
                        className="group bg-gradient-to-br from-[#003473]/10 to-[#003473]/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#003473]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-[#003473]/30 cursor-pointer"
                        onClick={() => handleContactClick('phone')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#003473] to-[#003473]/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 mb-0.5">Telefonnummer</h3>
                                <p className="text-[#003473] hover:text-[#003473]/80 font-semibold text-sm sm:text-sm lg:text-base transition-colors hover:underline block truncate w-full text-left">
                                    {contactInfo.phone}
                                </p>
                                <p className="text-gray-500 text-xs mt-0.5">Rufen Sie uns während der Geschäftszeiten an</p>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div 
                        className="group bg-gradient-to-br from-[#669933]/10 to-[#669933]/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#669933]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-[#669933]/30 cursor-pointer"
                        onClick={() => handleContactClick('email')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#669933] to-[#669933]/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 mb-0.5">E-Mail-Adresse</h3>
                                <p className="text-[#669933] hover:text-[#669933]/80 font-semibold text-sm sm:text-sm lg:text-base transition-colors hover:underline block truncate w-full text-left">
                                    {contactInfo.email}
                                </p>
                                <p className="text-gray-500 text-xs mt-0.5">Schreiben Sie uns eine E-Mail für Anfragen</p>
                            </div>
                        </div>
                    </div>

                    {/* Website */}
                    <div 
                        className="group bg-gradient-to-br from-[#003473]/10 to-[#003473]/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#003473]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-[#003473]/30 cursor-pointer"
                        onClick={() => handleContactClick('website')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#003473] to-[#003473]/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.6 9h16.8M3.6 15h16.8" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 mb-0.5">Webseite</h3>
                                <p className="text-[#003473] hover:text-[#003473]/80 font-semibold text-sm sm:text-sm lg:text-base transition-colors hover:underline block truncate w-full text-left">
                                    {contactInfo.website}
                                </p>
                                <p className="text-gray-500 text-xs mt-0.5">Besuchen Sie unsere Webseite für weitere Informationen</p>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div 
                        className="group bg-gradient-to-br from-[#669933]/10 to-[#669933]/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#669933]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-[#669933]/30 cursor-pointer"
                        onClick={() => handleContactClick('address')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#669933] to-[#669933]/80 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 mb-0.5">Adresse</h3>
                                <p className="text-[#669933] hover:text-[#669933]/80 font-semibold text-sm sm:text-sm lg:text-base transition-colors hover:underline block truncate w-full text-left">
                                    {contactInfo.address}
                                </p>
                                <p className="text-gray-500 text-xs mt-0.5">Klicken Sie hier, um uns auf Google Maps zu finden</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}