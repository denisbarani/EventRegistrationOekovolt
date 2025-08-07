'use client';

import EventRegistrationForm from '../components/EventRegistrationForm';
import ContactInformation from '../components/ContactInformation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#669933]/10 to-[#003473]/10">
      {/* Mobile Layout (stacked) */}
      <div className="lg:hidden">
        <div className="flex flex-col min-h-screen">
          {/* Registration Form - Takes more space on mobile */}
          <div className="flex-1 min-h-[60vh] flex items-center justify-center px-2 py-3">
            <EventRegistrationForm />
          </div>
          
          {/* Contact Information - Compact on mobile */}
          <div className="flex-1 min-h-[40vh] flex items-center justify-center px-2 py-3">
            <ContactInformation />
          </div>
        </div>
      </div>

      {/* Desktop Layout (side by side) */}
      <div className="hidden lg:block">
        <div className="min-h-screen flex items-center justify-center p-4 xl:p-6 2xl:p-8">
          <div className="flex flex-row gap-6 xl:gap-8 2xl:gap-12 max-w-7xl w-full h-full">
            {/* Left Side - Registration Form */}
            <div className="w-3/5 xl:w-7/12 flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <EventRegistrationForm />
              </div>
            </div>
            
            {/* Right Side - Contact Information */}
            <div className="w-2/5 xl:w-5/12 flex items-center justify-center">
              <div className="w-full max-w-lg">
                <ContactInformation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}