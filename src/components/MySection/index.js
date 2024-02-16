import React from 'react'
import { MyContainer,  MyLeftContainer, Img, MyRightContainer, InnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './MyStyle'
import MyImg from '../../images/Omkar2.jpg'
import Typewriter from 'typewriter-effect';
import { My } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <MyContainer>
             
                <InnerContainer >
                    <MyLeftContainer id="Left">
                        <Title>Hi, I am <br /> {My.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: My.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{My.description}</SubTitle>
                        <ResumeButton href={My.resume} target='display'>Check Resume</ResumeButton>
                    </MyLeftContainer>

                    <MyRightContainer id="Right">

                        <Img src={MyImg} alt="hero-image" />
                    </MyRightContainer>
                </InnerContainer>

            </MyContainer>
        </div>
    )
}

export default HeroSection