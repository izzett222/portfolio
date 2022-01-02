/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import Header from '../components/Header';
import { H2, Ul, P, A } from '../components/lib';
import chatApp from '../assets/chatimage1.png';
import myTools from '../assets/mytools.png';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Project from '../components/project';

const LandingPage = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);
    return <div css={{
        background: '#FAFBFC',
        position: 'relative',
    }}>
        <Header />
        <main
            css={{
                maxWidth: 834,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 104,
                marginBottom: 72,
                ' @media (max-width: 866px)': {
                    marginRight: 32,
                    marginLeft: 32,
                    marginTop: 80,

                }
            }}>
            <div className='about me'>
                <h1
                    css={{
                        fontFamily: '"DM Serif Text", serif',
                        fontSize: '72px',
                        color: '#172B4D',
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        lineHeight: '96.6%',
                        ' @media (max-width: 866px)': {
                            fontSize: 64,

                        },
                        ' @media (max-width: 670px)': {
                            fontSize: 48,

                        },
                        ' @media (max-width: 525px)': {
                            fontSize: 40,

                        },
                        ' @media (max-width: 445px)': {
                            fontSize: 32,

                        }
                    }}>Hi there, <span css={{ color: '#008DA6' }}>I’m Izzeddin</span>  <br /> FullStack developer</h1>
                <p
                    css={{
                        color: '#172B4D',
                        width: '100%',
                        fontSize: 24,
                        lineHeight: '138%',
                        fontFamily: 'aileron, sans-serif',
                        ' @media (max-width: 866px)': {
                            fontSize: 22,

                        },
                        ' @media (max-width: 670px)': {
                            fontSize: 18,

                        },
                        ' @media (max-width: 525px)': {
                            fontSize: 16,
                            lineHeight: '157%'

                        },
                    }}>Hey, I’m Izzeddin, a full-stack developer. I’m on a journey to build amazing and thoughtful interfaces on the web.  It all began when I joined the Andela fellowship program where I learned both soft and technical skills to work in a team and build a web application from the ground up.


                </p>
                <p
                    css={{
                        color: '#172B4D',
                        width: '100%',
                        fontSize: 24,
                        lineHeight: '151.19%',
                        fontFamily: 'aileron, sans-serif',
                        ' @media (max-width: 866px)': {
                            fontSize: 22,

                        },
                        ' @media (max-width: 670px)': {
                            fontSize: 18,

                        },
                        ' @media (max-width: 550px)': {
                            display: 'none'

                        }
                    }}>
                    Since then I have been working at Cinetie to build a movie streaming platform and I started adding design to my skill set as I’m interested in how those same interfaces were conceived.
                </p>
            </div>
            <div id='skills'
                css={{
                    boxShadow: '2px 6px 9px #EBECF0',
                    border: '1px solid rgba(23, 43, 77, 0.1)',
                    background: '#FFFFFF',
                    width: '100%',
                    marginTop: '96px',
                    marginBottom: '96px',
                    ' @media (max-width: 866px)': {
                        marginTop: 64,
                        marginBottom: 64
                    }
                }}>
                <div
                    css={{
                        marginTop: 24,
                        marginLeft: 40
                    }}>
                    <H2
                        css={{
                            marginBottom: 0,
                            marginTop: 0,
                            fontSize: 28
                        }}>Skills</H2>
                    <p
                        css={{
                            color: '#172B4D',
                            fontFamily: 'aileron, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '150.19%',
                            width: 464,
                            fontSize: 18,
                            marginBlock: 0,
                            marginTop: 3,
                            marginBottom: 9,
                            marginRight: 16,
                            '@media (max-width: 623px)': {
                                width: 'auto',
                                fontSize: 16,
                            }
                        }}>for the past few year, I have been learning and practicing a lot of skill and still looking to add more</p>
                    <Ul
                        css={{
                            display: 'flex',
                            width: 500,
                            justifyContent: 'space-between',

                            marginBottom: 24,
                            '@media (max-width: 623px)': {
                                width: 'auto',
                                justifyContent: 'space-around',
                                fontsize: 16,
                            },
                            '@media (max-width: 575px)': {
                                flexDirection: 'column'
                            }
                        }}>
                        <div>
                            <li>javascript ES6</li>
                            <li>Reactjs</li>
                        </div>
                        <div>
                            <li>Nodejs & expressjs</li>
                            <li>Postgresql</li>
                        </div>
                        <div>
                            <li>Git</li>
                        </div>
                    </Ul>
                </div>

            </div>
            <div id='projects'>
                <H2>Projects I have worked on</H2>
                <P css={{ marginBottom: 16, marginTop: 4, }}>I like to stay busy and always have a project in the works. Take a look at some<br />of the applications I've dedicated my time to.</P>
                <div css={{
                    maxWidth: 834,
                    height: 'fit-content',
                    display: 'flex',
                    gap: 16,
                    ' @media (max-width: 866px)': {
                        flexDirection: 'column',
                }
                }}>
                   <Project path='/chat-app' image={chatApp} name="web chat" summary="A chat platform were friend connect with each other on the web." />
                   <Project path='/my-tools' image={myTools} name="my-tools" summary="A platform to save and organise all the development tools you are using." />
                </div>
            </div>
            <div id='contact' css={{
                marginTop: 56,
            }}>
                <H2 css={{ marginBlock: 0, marginBottom: 4 }}>Let’s work together</H2>
                <P css={{ marginBottom: 8, }}>Feel free to reach out to me if you are<br /> looking for a developer</P>
                <A href="mailto: iizzeddin62@gmail.com">iizzeddin62@gmail.com</A>
            </div>
        </main>
        <Footer />
    </div>
}

export default LandingPage;
