import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Info = () => {
    return (
        <div className='lg:p-14 md:p-8 sm:p-3'>
            <div className='bg-[#0058FF]  rounded-lg text-white text-center mx-auto p-4 
            w-[980px] lg:p-10
            md:w-[688px] md:p-12
            sm:w-[358px] sm:p-10'>
                <h1 className='text-3xl font-bold pb-3'>Get In Touch</h1>
                <p className='font-semibold text-base pb-4'>Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.</p>
                <button className='bg-white text-[#0058FF] p-2 rounded-lg font-semibold mx-auto flex justify-center'>Book a Professional Plumber <FaArrowRight style={{ marginLeft: '8px', fontSize: 16, position: "relative", top: "5px" }} /></button>
            </div>
        </div>
    );
};

export default Info;