import React from 'react';
import photoImg1 from '../../../../assets/lineImg/1.png'
import photoImg2 from '../../../../assets/lineImg/2.png'
import photoImg3 from '../../../../assets/lineImg/3.png'
import Container from '../../Shared/FixedSize/Container'
// import './LineBorderText.css'

const LineBorderText = () => {
    return (
        <Container>
            <div className="border-4 border-[#0D2E63]   p-4">
                <div className="flex ">
                    <div className="rounded-full bg-gray-800 w-16 h-16 overflow-hidden item">    
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

            <div className="border-4  border-[#0D2E63] p-4 my-4">
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
            <div className="border-4  border-[#0D2E63] p-4">
                <div className="flex ">
                    <div className="rounded-full bg-gray-800 w-16 h-16 overflow-hidden item">    
                        <img src={photoImg3} alt="Photo" className="w-full h-full object-cover" />
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
        </Container>
    );
};

export default LineBorderText;