import React from 'react';
import Container from '../../Shared/FixedSize/Container';

const Video = () => {
    return (
        <Container >
            <div>
                <div class="flex justify-center">
                    <iframe width="750" height="415" src="https://www.youtube.com/embed/4NYG91QSARc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>             </div>
            </div>

        </Container>
    );
};

export default Video;