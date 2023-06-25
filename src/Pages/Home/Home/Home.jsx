import React from 'react';
import Container from '../Shared/FixedSize/Container';
import HeroArea from './HeroArea/HeroArea';
import Video from './Video/VIdeo';
import LineBorderText from './LineBorderText/LineBorderText';
import DanceStudioChallenges from './DanceStudioChallenges/DanceStudioChallenges';
import GoToImg from './GoToImg/GoToImg';

const Home = () => {
    return (
        <Container>
           <HeroArea />
           <Video/>
           <LineBorderText />
           <DanceStudioChallenges />
           <GoToImg />
        </Container>
    );
};

export default Home;