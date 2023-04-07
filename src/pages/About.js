import React from 'react';

const About = () => {
  return (
    <div className="mx-auto p-6 max-w-md ">
      <div className="bg-white rounded-lg  overflow-hidden pt-5">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Muhammad Abduh</div>
          <p className="text-gray-600 text-sm">Full-Stack Software Developer</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="border-t border-gray-200">
            <dl>
              <div className="p-4 bg-gray-50 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                <div className="text-sm font-medium text-gray-500">Email</div>
                <div className="text-sm text-gray-900 sm:col-span-2">imuhammadabduh@example.com</div>
                <div className="text-sm font-medium text-gray-500">Phone</div>
                <div className="text-sm text-gray-900 sm:col-span-2">(123) 456-7890</div>
                <div className="text-sm font-medium text-gray-500">Location</div>
                <div className="text-sm text-gray-900 sm:col-span-2">Indonesia</div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
