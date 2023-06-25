import React from 'react';
import Container from '../../Shared/FixedSize/Container';
import photoImg1 from '../../../../assets/lineImg/1.png'
import photoImg2 from '../../../../assets/lineImg/2.png'
const Benefits = () => {
    return (
        <Container>
            <div>
                <div className="hero  min-h-full">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold text-[#0D2E63] mt-4">Benefits Of Working With Us:</h1>
                            <ol className='text-justify my-4'>
                                <div>
                                    <li type="1"><b> Unmatched Track Record:</b> We're privileged to hold the position of number 1 in our industry for the most client video testimonials, exceeding 30 raving reviews and counting.</li>
                                    <li type="1"><b>Proven Methods, Proven Success:</b> We don't believe in reinventing the wheel. Our success formula, tested in over 200 studios, delivers reliable and consistent results.
                                    </li>
                                    <li type="1"><b>Done-for-You Approach:</b> Say goodbye to the struggles with tech and advertising. We handle it all for you, providing a seamless process from start to finish.
                                    </li>
                                    <li type="1"><b>Simplify with Automation:</b> We make your processes smoother, more efficient, and hassle-free, so you never have to worry about leads falling through the cracks.
                                    </li>
                                    <li type="1"><span>Time in Your Hands:</span> We do most of the work, freeing up your valuable time so you can focus on your creativity and passion for teaching.
                                    </li>
                                    <li type="1"><b>Tech Simplified, Success Amplified:</b> You might not be tech enthusiasts, but we are. We handle all things tech, so you can keep your students dancing to the beat.
                                    </li>
                                    <li type="1"><b>All-Inclusive Service:</b> Tech hurdles and ad woes are now a thing of the past. We fully manage your technology and advertising needs for a smooth, effortless experience.
                                    </li>
                                    <li type="1"><b>Breakthrough Your Plateau:</b> Say goodbye to plateaued enrollments. With our strategies, your studio is set for a growth spurt like never before.
                                    </li>
                                    <li type="1"><b> Cultivate Long-Term Relationships:</b> We help you attract your ideal client, laying a strong foundation for your studio's long-term success and influence in the community.
                                    </li>
                                    <li type="1"><b>Get More Students, Stress Less:</b> Our mission is simple – to help you attract more students, grow your programs, and ease the stress of marketing and tech.
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

export default Benefits;