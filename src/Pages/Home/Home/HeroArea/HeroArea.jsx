import React from 'react';
import Container from '../../Shared/FixedSize/Container';

const HeroArea = () => {
    return (
        <Container>
            <div>
                <div className="hero  min-h-full">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold text-[#0D2E63] mt-32">Attract More Students, Less Effort - UNLOCK Your Dance Studio's Potential!</h1>
                            <p className="py-6">Allow your passion for dance to take center stage. We provide the marketing and automation strategies that have proven successful for over 200 studios just like yours, freeing up your time to teach, inspire, and choreograph!</p>
                            <button className="btn bg-[#FD5B16] text-white hover:bg-[#0D2E63]">Book a Call</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HeroArea;