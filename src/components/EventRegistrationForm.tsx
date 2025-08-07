'use client';

import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

export default function EventRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'VtHAmcrL_HSci02if');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        additional_info: formData.additionalInfo || 'None provided',
        to_name: 'Event Organizerr',
        message: `
          New Event Registration:
          
          Name: ${formData.firstName} ${formData.lastName}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Additional Information: ${formData.additionalInfo || 'None provided'}
          
          Submitted at: ${new Date().toLocaleString()}
        `,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_h6oi7tm',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_wd85mvo',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'VtHAmcrL_HSci02if'
      );

      if (result.status === 200) {
        setSubmitSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            additionalInfo: '',
          });
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send registration. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 lg:p-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-white/20 text-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#669933]/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#669933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 text-sm sm:text-sm lg:text-base px-2">Thank you for registering for our event. We&apos;ve sent a confirmation email to {formData.email}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 lg:p-6">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-white/20">
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-7 relative overflow-hidden border-b border-gray-200">
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
              <Image
                src={Logo}
                alt="Oekovolt Logo"
                className="w-28 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12 lg:w-48 lg:h-14 object-contain"
                priority
              />
            </div>

            <div className="text-center">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 text-[#669933] leading-tight">
                Event Registration
              </h1>
              <p className="text-gray-600 text-sm sm:text-sm lg:text-base font-medium">
                Join us for our exclusive event
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-5">
          {/* Error Message */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700 text-sm">{submitError}</p>
              </div>
            </div>
          )}

          {/* Personal Information */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-3">
            <div className="flex items-center space-x-2 pb-1.5 border-b-2 border-[#669933]/20">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-[#669933] to-[#669933]/80 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 lg:gap-4">
              <div className="space-y-1">
                <label htmlFor="firstName" className="block text-xs sm:text-sm lg:text-sm font-semibold text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm sm:text-sm lg:text-base"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="lastName" className="block text-xs sm:text-sm lg:text-sm font-semibold text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm sm:text-sm lg:text-base"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 lg:gap-4">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs sm:text-sm lg:text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm sm:text-sm lg:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="block text-xs sm:text-sm lg:text-sm font-semibold text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm sm:text-sm lg:text-base"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-3">
            <div className="flex items-center space-x-2 pb-1.5 border-b-2 border-[#669933]/20">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-[#669933] to-[#669933]/80 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">Additional Information</h3>
            </div>

            <div className="space-y-1">
              <label htmlFor="additionalInfo" className="block text-xs sm:text-sm lg:text-sm font-semibold text-gray-700">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-2.5 sm:px-3 lg:px-4 py-2 sm:py-2 lg:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none text-sm sm:text-sm lg:text-base"
                placeholder="Any additional information or special requirements..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 sm:pt-3 lg:pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#669933] to-[#669933]/80 text-white font-bold py-2.5 sm:py-3 lg:py-3.5 px-4 sm:px-5 lg:px-6 rounded-lg hover:from-[#669933]/90 hover:to-[#669933]/70 focus:ring-4 focus:ring-[#669933]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base lg:text-base"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Registration...
                </div>
              ) : (
                'Register for Event'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}