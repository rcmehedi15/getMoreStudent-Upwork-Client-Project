import React from 'react';
import Container from '../../Shared/FixedSize/Container';
import img1 from '../../../../assets/GoToImg/1.png'
import img2 from '../../../../assets/GoToImg/2.png'
import arrowImg from '../../../../assets/GoToImg/arrow.png'
import arrowImg2 from '../../../../assets/GoToImg/arrow2.png'
const GoToImg = () => {
    return (
        <Container>
            <div className="grid md:grid-cols-3 grid-cols-1 items-center mt-8">
                <div className="w-full text-center">
                    <span className="font-bold text-4xl">Go from this...</span>
                    <img src={img1} alt="Left Image" className="border-4 my-4 border-[#0D2E63] w-full h-full object-cover" />
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                <img src={arrowImg} className='w-52 hidden md:block' alt='Arrow' />
                <img src={arrowImg2} className='w-20 lg:hidden ' alt='Arrow' />
                
                </div>
                <div className="w-full text-center">
                    <span className="font-bold text-4xl">To this!!!</span>
                    <img src={img2} alt="Right Image" className="border-4 my-4 border-[#0D2E63] w-full h-full object-cover" />
                </div>
            </div>

        </Container>
    );
};

export default GoToImg;