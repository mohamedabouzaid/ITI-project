import React from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
const User = {
  name: "mohamed Abouzaid",
  address: "ismailia",
  email: "mohamed@gmail.com",
  money: 12.03,
};














const ProfileDetails = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          User Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">image</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:flex lg:items-center lg:justify-between">
              {" "}
              <img
                className="h-16 w-16 rounded-full flex items-center"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <Link to="" className="flex items-center">
              <button type="button" className="flex-inline px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Edit</button> 
              </Link>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:flex lg:items-center lg:justify-between">
              <span>{User.name}</span>
              <Link to="" className="flex items-center">
              <button type="button" className="flex-inline px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Edit</button> 
              </Link>
            </dd>
            
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">ADDRESS BOOK</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:flex lg:items-center lg:justify-between">
              <span>{User.address}</span>
              <Link to="" className="flex items-center">
              <button type="button" className="flex-inline px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Edit</button> 
              </Link>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 selection:">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:flex lg:items-center lg:justify-between">
             <span>{User.email}</span>
             <Link to="" className="flex items-center">
              <button type="button" className="flex-inline px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Edit</button> 
              </Link>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">STORE CREDIT</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:flex lg:items-center lg:justify-between">
              <span>EGP{User.money}</span>
             
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProfileDetails;
