import React from 'react';
import Container from '../../Shared/FixedSize/Container';

const DanceStudioChallenges = () => {
    return (
        <Container>
            <div>
                <div className="hero  min-h-full">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold text-[#0D2E63] mt-12">Do These Dance Studio Challenges <br /> Ring a Bell?</h1>
                            <ol className='text-justify my-4'>
                                <li>1. Do you have empty spots in your classes that you would like to fill up?</li>
                                <li>2. Tired of your dance studio being the best-kept secret in town?</li>
                                <li>3. Are you or your team spending too much time trying to follow up with leads?</li>
                                <li>4. Are potential leads falling through the cracks?</li>
                                <li>5. "Facebook changes their platform every 5 minutes!" - Sounds familiar?</li>
                                <li>6. Got a plate so full you can barely pirouette?</li>
                                <li>7. Struggling to attract your ideal clients?</li>
                                <li>8. Frustrated by the lack of foot traffic through your studio doors?</li>
                                <li>9. Juggling too many hats?</li>
                            </ol>

                            <button className="btn bg-[#05F6EE] text-white hover:bg-[#0D2E63]">Book a Call</button>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default DanceStudioChallenges;