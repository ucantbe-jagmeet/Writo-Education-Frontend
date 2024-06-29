import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { LiaCopyrightSolid } from "react-icons/lia";
const Community_footer = () => {
  return (
   < div className="flex flex-col mt-5">
    <div className="w-full bg-[#178774] pt-4 md:pl-20">
      <div className="flex items-center w-full mb-4">
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-1/3 md:bg-white p-2 mb-2 rounded-full">
          <input
            className="w-80 bg-white px-4 py-2 mb-2 sm:mb-0 rounded-full text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
            id="email"
            type="text"
            placeholder="Email address to subscribe"
          />
          <button
            className="sm:w-32 w-36 bg-[#3F7A70] hover:bg-blue-700 text-sm text-white py-2 px-4 rounded-full sm:ml-2"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Middle Footer Section that contain all matter and links and about part */}
    <div>
      <div className="w-full bg-[#178774] text-white px-4 -mt-1">
        <div className="w-full bg-[#178774] text-white px-8">
          <div className="w-full bg-[#178774] text-white px-6 py-2">
            <div className="flex flex-col lg:flex-row w-full justify-between space-y-6 lg:space-y-0 lg:space-x-6">
              <div className="w-full lg:w-1/3 mr-4">
                <div className="font-serif">
                  <h2 className="font-bold text-xl lg:text-2xl">
                    Write Education
                  </h2>
                  <p className="text-sm lg:text-base leading-relaxed mt-4">
                    At Write Education, we’re passionate about empowering
                    JEE/NEET aspirants to reach their full potential. Our
                    team is committed to providing you with the best
                    learning experience possible.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="w-full lg:w-1/3">
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                  <ul className="text-lg space-y-2 mt-4">
                    <li>
                      <Link to={'/why_writo'} className="hover:underline">
                        Why choose us
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className="hover:underline">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link to={'/terms'} className="hover:underline">
                        Terms and conditions
                      </Link>
                    </li>
                    <li>
                      <Link to={'/privacy'} className="hover:underline">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link to={'/faq'} className="hover:underline">
                        FAQs and Help
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/3">
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                  <p className="text-lg leading-relaxed mt-4">
                    Mon - Fri
                    <br />
                    9.00 am to 07.00 pm
                    <br />
                    Saturday
                    <br />
                    9.00 am to 06.00 pm
                    <br />
                    Sunday also available
                  </p>
                </div>
                <div className="w-full lg:w-1/3">
                  <h3 className="text-lg font-semibold">Contact Info</h3>
                  <p className="text-lg leading-relaxed mt-4">
                    <div className="flex flex-row">
                      <FaLocationDot className="h-4 w-4 mt-2 mr-1" />
                      Rewa, India
                    </div>
                    <div className="flex flex-row">
                      <BsFillTelephoneFill className="h-4 w-4 mt-2 mr-1" />
                      +91 80594 58609
                    </div>
                    <div className="flex flex-row">
                      <IoMdMail className="h-4 w-4 mt-2 mr-1" />
                      support@write.tech
                    </div>

                    <div className="flex flex-row space-x-2 mt-2">
                      <a href="www.instagram.com" className="hover:underline">
                        <FaInstagram className="text-white w-6 h-6" />
                      </a>
                      <a href="#" className="hover:underline">
                        <FaFacebook className="text-white h-6 w-6" />
                      </a>
                      <a href="#" className="hover:underline">
                        <FaLinkedin className="w-6 h-6 text-white" />
                      </a>
                      <a href="#" className="hover:underline">
                        <FaTwitter className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Part -> Copy rights Part */}
      <div className="bg-[#006756] w-full p-2 text-white mt-">
        <div className="flex flex-row ml-4 space-x-4">
          <LiaCopyrightSolid className="text-white font-bold h-6 w-6" />
          <Link to={"/"}>
            <p className="text-white font-semibold">Writo Education</p>
          </Link>
          <Link to={"/copyrights"}>
            <p className="text-gray-500 text-sm hover:text-gray-400">
              All rights reserved
            </p>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Community_footer
