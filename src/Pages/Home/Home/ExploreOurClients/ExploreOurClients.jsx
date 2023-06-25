import React from 'react';
import Container from '../../Shared/FixedSize/Container';

const ExploreOurClients = () => {
    return (
        <Container>
            <div>
                <h1 className="text-4xl font-bold text-[#0D2E63] mt-12 text-center my-8">Explore Our Clients' Success Stories!</h1>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 text-center font-bold'>
                    <div className="client">
                        <p >Shawna Kwan</p>
                        <div>
                            <iframe
                                className='w-full'

                                height="315"
                                src="https://www.youtube.com/embed/VIDEO_ID"
                                title="Client Success Story"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p>Elan Dance Arts</p>
                        <p className='text-[#0D2E63] '>London, ON</p>
                    </div>
                    <div className="client">
                        <p >Jodi Shilling</p>
                        <div>
                            <iframe
                                className='w-full'
                                height="315"
                                src="https://www.youtube.com/embed/VIDEO_ID"
                                title="Client Success Story"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p>Releve Studios</p>
                        <p className='text-[#0D2E63] '>Northridge, CA</p>
                    </div>

                    <div className="client">
                        <p >Jan Bilhartz</p>
                        <div>
                            <iframe
                                className='w-full'
                                height="315"
                                src="https://www.youtube.com/embed/VIDEO_ID"
                                title="Client Success Story"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p>The Movement </p>
                        <p className='text-[#0D2E63] '>Fayetteville, AR</p>
                    </div>

                    <div className="client">
                        <p >Emma Schwickerath</p>
                        <div>
                            <iframe
                                className='w-full'
                                height="315"
                                src="https://www.youtube.com/embed/VIDEO_ID"
                                title="Client Success Story"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p>Miss Emma's</p>
                        <p className='text-[#0D2E63] '>New Hampton, IA</p>
                    </div>
                </div>
                    <div className='flex justify-center items-center'>
                        <button className="btn  bg-[#05F6EE] text-white hover:bg-[#0D2E63] my-4">See More Success Stories</button>
                    </div>

            </div>
        </Container>
    );
};

export default ExploreOurClients;