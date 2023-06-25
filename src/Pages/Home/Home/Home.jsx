import React from 'react';
import Container from '../Shared/FixedSize/Container';
import HeroArea from './HeroArea/HeroArea';
import Video from './Video/VIdeo';

const Home = () => {
    return (
        <Container>
           <HeroArea />
           <Video/>
        </Container>
    );
};

export default Home;