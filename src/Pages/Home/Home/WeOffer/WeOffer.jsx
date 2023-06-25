import React from 'react';
import Container from '../../Shared/FixedSize/Container';
import photoImg1 from '../../../../assets/lineImg/1.png'
import photoImg2 from '../../../../assets/lineImg/2.png'
const WeOffer = () => {
    return (
        <Container>
            <div>
                <div className="hero  min-h-full">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold text-[#0D2E63] mt-12">Here's What We Offer:</h1>
                            <ol className='text-justify my-4'>
                                <div>
                                    <li type="1"><b> Dramatic Boost in Student Enrollment:</b> Experience a significant increase in student sign-ups. The studios we're working with that are in small towns gain an average of 7 new students, mid-size city studios bring in 17, while large city studios see an influx of over 25 new students per month.</li>

                                    <li type="1"><b>Done-for-You Advertising:</b> Get ready to wave goodbye to the complexities of Facebook ads. Our 'done-for-you' advertising service handles all the tech, freeing you up to focus on what you do best.

                                    </li>
                                    <li type="1"><b>Advanced Automated Systems:</b> We leverage advanced automation to streamline your enrollment processes, allowing you to save time and reap better results.

                                    </li>
                                    <li type="1"><b>Done-for-You Tech Setup:</b> Forget the hassle of technological setup. We handle all the technicalities so you can concentrate on perfecting your classes.

                                    </li>
                                    <li type="1"><b>Personalized Coaching & Accountability:</b> You're not alone. Our monthly 1-on-1 coaching and accountability calls ensure you're guided and supported every step of the way.

                                    </li>
                                    <li type="1"><b>Weekly Group Coaching Calls:</b> Stay ahead of the curve with our group coaching sessions, delivering the latest insights in marketing and automation.

                                    </li>
                                    <li type="1"><b>1-On-1 Onboarding:</b> We train both you and your team to use our systems effectively, enabling a smooth transition and easy adaptation.

                                    </li>
                                    <li type="1"><b>VIP Support:</b> Stuck on something? Our dedicated support team is always ready to jump in and help, any time of the day.

                                    </li>
                                    <li type="1"><b>Thriving Community of Studio Owners:</b> Join a vibrant, supportive community of studio owners. Collaborate, share experiences, and grow together.

                                    </li>
                                    <li type="1"><b>Exclusive Access to StudioHub:</b> Discover the potential of our unique automation & communications platform, StudioHub. This is our secret sauce designed to supercharge your studio's success.
                                    </li>
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* photos  */}
               <div className='container mx-auto max-w-2xl'> 
               <div className="border-4 border-[#0D2E63]  p-4">
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
            </div>
        </Container>
    );
};

export default WeOffer;