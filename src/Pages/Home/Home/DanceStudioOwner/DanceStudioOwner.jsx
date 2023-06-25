import React from 'react';
import Container from '../../Shared/FixedSize/Container';
import photoImg1 from '../../../../assets/Owner/owner.jpg'

const DanceStudioOwner = () => {
    return (
        <Container>
            <div>
                <div className="hero  min-h-full">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold text-[#0D2E63] mt-12">Created By Dance Studio Owners!</h1>
                            <div className="w-full text-center">
                                <span className="font-bold text-4xl">Go from this...</span>
                                <img src={photoImg1} alt="Left Image" className="border-4 my-4 border-[#0D2E63] w-full h-full object-cover" />
                                <p className='text-xl'>Hervin & Oana - Founders of Get More Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div >

                    <p className='text-center text-xl'>Hervin and Oana loved dancing so much that they decided to open their own studio. <span className='underline'> At first, they struggled to attract students.</span> They tried everything, but nothing seemed to work. So, they embarked on a journey together to learn the business side of running a dance studio. <span className='underline'>They spent over $50,000 on business coaches, marketing mentors, and seminars to learn how to market their studio like pros. </span> After applying all their newfound knowledge, <b> they were able to double their studio revenue in just 3-5 months!</b> This gave them the idea to start <b>"Get More Students" to help other studio owners succeed. Now, as a team of six, Get More Students has helped over 200 dance studios in the U.S., Canada, Australia, and the UK.</b>
                    </p>

                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button className="btn  bg-[#05F6EE] text-white hover:bg-[#0D2E63]">Book a Call</button>
                </div>
            </div>
        </Container>
    );
};

export default DanceStudioOwner;