/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import Header from '../components/Header';
import { H2, Ul, P, A, RouterLink  } from '../components/lib';
import chatApp from '../assets/chatimage1.png';
import Footer from '../components/Footer';
import {  useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LandingPage = () => {
    const { pathname, hash, key } = useLocation();
    const navigate = useNavigate();

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
        <main css={{
            maxWidth: 834,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 104,
            marginBottom: 72
        }}>
            <div className='about me'>
                <h1 css={{
                    fontFamily: '"DM Serif Text", serif',
                    fontSize: '72px',
                    color: '#172B4D',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '96.6%'
                }}>Hi there, <span css={{ color: '#008DA6' }}>I’m Izzeddin</span>  <br /> FullStack developer</h1>
                <p css={{
                    color: '#172B4D',
                    width: '100%',
                    fontSize: 24,
                    lineHeight: '138%',
                    fontFamily: 'aileron, sans-serif'
                }}>Hey, I’m Izzeddin, a full-stack developer. I’m on a journey to build amazing and thoughtful interfaces on the web.  It all began when I joined the Andela fellowship program where I learned both soft and technical skills to work in a team and build a web application from the ground up.


                </p>
                <p css={{
                    color: '#172B4D',
                    width: '100%',
                    fontSize: 24,
                    lineHeight: '151.19%',
                    fontFamily: 'aileron, sans-serif'
                }}>
                    Since then I have been working at Cinetie to build a movie streaming platform and I started adding design to my skill set as I’m interested in how those same interfaces were conceived.
                </p>
            </div>
            <div id='skills' css={{
                boxShadow: '2px 6px 9px #EBECF0',
                border: '1px solid rgba(23, 43, 77, 0.1)',
                background: '#FFFFFF',
                width: '100%',
                marginTop: '96px',
                marginBottom: '96px',
            }}>
                <div css={{
                    marginTop: 24,
                    marginLeft: 40
                }}>
                    <H2 css={{
                        marginBottom: 0,
                        marginTop: 0,
                        fontSize: 32
                    }}>Skills</H2>
                    <p css={{
                        color: '#172B4D',
                        fontFamily: 'aileron, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        lineHeight: '150.19%',
                        width: 464,
                        fontSize: 18,
                        marginBlock: 0,
                        marginTop: 3,
                        marginBottom: 9
                    }}>for the past few year, I have been learning and practicing a lot of skill and still looking to add more</p>
                    <Ul css={{
                        display: 'flex',
                        width: 500,
                        justifyContent: 'space-between',
                        marginBottom: 24
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
                <div onClick={() => navigate('/chat-app', { replace: true })} css={{
                    maxWidth: '834px',
                    height: 'auto',
                    position: 'relative',
                    '&:hover': {
                        cursor: 'pointer',
                        picture: {
                            '&::before': {
                                backgroundColor: '#35f',
                                position: 'absolute',
                                width: '834px',
                                height: '513px',
                                content: '""',
                                opacity: 0.5,
                                display: 'inline-block',
                                zIndex: 2,
                                borderRadius: 5,
                            }
                        },
                        '.details': {
                            border: '1px solid #35f',
                            boxShadow: 'none',
                            a: {
                                textDecorationColor: '#35f',
                                cursor: 'pointer'
                            }
                        }
                    }

                }}>
                    <picture css={{
                        width: '834px',
                        '&::before': {
                            content: '""',
                            transition: 'background-color 0.3s cubic-bezier(.77,0,.175,1)',
                        }

                    }} src={chatApp} alt='chat app' >
                        <img css={{
                            width: '100%',
                            objectFit: 'fill',
                            filter: 'drop-shadow(3px 5px 8px #EBECF0)',
                            borderRadius: 5,

                        }} src={chatApp} alt='chat app' />
                    </picture>
                    <div className='details' css={{
                        background: '#FFFFFF',
                        zIndex: 3,
                        border: '1px solid rgba(23, 43, 77, 0.25)',
                        boxSizing: 'border-box',
                        boxShadow: '3px 5px 8px #EBECF0',
                        borderRadius: '4px',
                        position: 'absolute',
                        width: 525,
                        height: 130,
                        bottom: -50,
                        left: 73,
                        transition: 'border 0.3s cubic-bezier(.77,0,.175,1)',
                    }}>
                        <RouterLink to='/chat-app' css={{
                            fontSize: 24,
                            fontFamily: '"DM Serif Text", serif',
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            marginBlock: 0,
                            marginTop: 16,
                            marginBottom: 8,
                            marginLeft: 24,
                        }}>web chat</RouterLink>
                        <P css={{
                            marginLeft: 24,

                        }}>A chat platform were friend connect with<br /> each other on the web.</P>
                    </div>
                </div>
            </div>
            <div id='contact' css={{
                marginTop: 96,
            }}>
                <H2 css={{ marginBlock: 0, marginBottom: 4 }}>Let’s work together</H2>
                <P css={{ marginBottom: 8, }}>Feel free to reach out to me if you are<br /> looking for a developer</P>
                <A href = "mailto: iizzeddin62@gmail.com">iizzeddin62@gmail.com</A>
            </div>
        </main>
        <Footer />
    </div>
}

export default LandingPage;
