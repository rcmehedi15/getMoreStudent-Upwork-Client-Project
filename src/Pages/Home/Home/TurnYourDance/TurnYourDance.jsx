import React from 'react';
import Container from '../../Shared/FixedSize/Container';
import photoImg1 from '../../../../assets/lineImg/1.png'
import photoImg2 from '../../../../assets/lineImg/2.png'

const TurnYourDance = () => {
    return (
        <Container>
            <div>
                <div className="hero  min-h-full">
                    <div className="hero-content text-center">
                        <div >
                            <h1 className="text-4xl font-bold text-[#0D2E63] mt-12 mb-3 ">Turn Your Dance Studio Dreams Into Reality with <br /> Get More Students - We Fill Your Classes So You <br /> Can Focus on the Dance!</h1>
                            <p className='text-left text-xl'>At <b > Get More Students</b>, we help make your dance studio dreams come true. We're like a super team that  <span className='underline'>helps you find more students who love to dance.</span> We use special tools to show your studio to families who might not know about you yet. Because of our help, more and more students will want to join your dance classes. This means you'll have more students dancing happily in your studio and more free time for you to teach and make your classes super fun.
                            </p>
                            <p className='text-left text-xl my-2'>Whether you're based in a bustling city or a small rural town, we make sure your marketing resonates with the right students in your community,<b> filling your classes to capacity.</b> With us handling your marketing and tech, you can focus on what truly sparks your joy: choreographing magical dance experiences, teaching your students, and fostering a nurturing dance community! <span className='underline'>With Get More Students, you can say goodbye to the business overwhelm</span> and hello to a growing dance studio filled with passion, commitment, and the joy of dance.</p>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-[#0D2E63]   p-4">
                    <div className="flex ">
                        <div className="rounded-full bg-g ray-800 w-16 h-16 overflow-hidden item">
                            <img src={photoImg1} alt="Photo" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-3/4 pl-4">
                            <h1 className="text-xl font-bold mb-2">John Doe</h1>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu rutrum est, ac
                                lobortis quam. Nullam aliquam semper eros in convallis. Mauris volutpat metus at
                                imperdiet tristique. Nulla et dapibus nulla. Donec et mauris vel mi feugiat
                                vulputate. Suspendisse potenti.
                            </p>

                        </div>
                    </div>

                </div>
                <div className="border-4 border-[#0D2E63]  my-4 p-4">
                    <div className="flex ">
                        <div className="rounded-full bg-gray-800 w-16 h-16 overflow-hidden item">
                            <img src={photoImg2} alt="Photo" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-3/4 pl-4">
                            <h1 className="text-xl font-bold mb-2">John Doe</h1>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu rutrum est, ac
                                lobortis quam. Nullam aliquam semper eros in convallis. Mauris volutpat metus at
                                imperdiet tristique. Nulla et dapibus nulla. Donec et mauris vel mi feugiat
                                vulputate. Suspendisse potenti.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center'>
                <button className="btn  bg-[#FD5B16] text-white hover:bg-[#0D2E63]">Book a Call</button>
            </div>
        </Container>
    );
};

export default TurnYourDance;