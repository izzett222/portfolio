/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import leftArrow from '../assets/leftArrow.svg';
import { A, H2, H4, P, RouterLink } from '../components/lib';
import chatApp1 from '../assets/chatapp1.png';
import chatImage from '../assets/chatimage1.png';

const ChatApp = () => {
    return <div css={{
        background: '#FAFBFC',
        position: 'relative',
    }}>
        <Header />
        <main css={{
            maxWidth: 621,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 96,
            marginBottom: 72,
            ' @media (max-width: 685px)': {
                marginRight: 32,
                marginLeft: 32,
                marginTop: 80,

            },
            ' @media (max-width: 800px)': {
                marginTop: 64

            }
        }}>
            <h1 css={{
                fontFamily: '"DM Serif Text", serif',
                fontSize: '48',
                color: '#172B4D',
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: '96.6%',
                ' @media (max-width: 525px)': {
                    fontSize: 40,

                },
                ' @media (max-width: 445px)': {
                    fontSize: 32,

                }
            }}>
                WEB CHAT
            </h1>
            <RouterLink to="/" css={{
                border: 'none',
                background: 'none',
                padding: 0,
                position: 'relative',
                display: 'flex',
                marginTop: 48,
                marginBottom: 24
            }}>
                <img src={leftArrow} css={{
                    height: 50,
                    width: 70,
                    position: 'relative',
                    display: 'inline-block',
                    left: -16,
                }} alt='left arrow' />
                <span css={{
                    display: 'inline-block',
                    marginTop: '15px',
                    position: 'relative',
                    left: -16,
                    color: '#172B4D',
                    fontFamily: 'aileron, sans-serif',
                }}>back</span>
            </RouterLink>
            <P>Web chat is a side project that I built to help people connect and chat with friends. It was built with reactjs, nodejs/express, socket.io and postgresql.</P>
            <div css={{
                maxWidth: 241,
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 16,
            }}>
                <div>
                    <H4>Code</H4>
                    <A css={{
                        color: '#008DA6',
                        marginTop: 4,
                    }}>Github repository</A>
                </div>
                <div >
                    <H4>Live demo</H4>
                    <A css={{
                        color: '#008DA6',
                        marginTop: 4,
                    }}>View site</A>
                </div>
            </div>
            <img src={chatApp1} alt='chat app signup page' css={{
                display: 'block',
                marginTop: 24,
                maxWidth: 621,
                height: 'auto',
                filter: 'drop-shadow(2px 4px 8px rgba(23, 43, 77, 0.18))',
                marginBottom: 32,
                ' @media (max-width: 685px)': {
                    width: '100%'
                }
            }} />
            <H2>Purpose and Goal</H2>
            <P css={{ maxWidth: 621, marginTop: 16 }}>The project will allow people chat without much of a hussle and the goal was to create something simple and complete which people can use easily. </P>
            <img src={chatImage} alt='chat app page' css={{
                display: 'block',
                marginTop: 24,
                maxWidth: 621,
                height: 'auto',
                filter: 'drop-shadow(2px 4px 8px rgba(23, 43, 77, 0.18))',
                marginBottom: 32,
                ' @media (max-width: 685px)': {
                    width: '100%'
                }
            }} />
            <H2>Implementation</H2>
            <P css={{ maxWidth: 621, marginTop: 16, marginBottom: 32 }}>The server uses nodejs and expressjs for routing. Postgresql is used as the database. I used socket.io for  real-time communication between client and server.<br />
                I used Reactjs for the client and emotion.sh for css in js. the focus was to create a screen where the user can view all their friends and chat with them on the same screen
            </P>
            <H2>Lesson Learned</H2>
            <P css={{
                marginTop: 16,
                marginBottom: 96
            }}>The project really helped me practice building react functional components with hooks. Other than technical practice I did, the project showed me the importance of planning before execution whether it is designing or coding</P>
        </main>
        <Footer />
    </div>
}

export default ChatApp;
