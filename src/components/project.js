/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import chatApp from '../assets/chatimage1.png';
import { RouterLink, P } from './lib';


export default function Project({ path, image, name, summary }) {
    const navigate = useNavigate();
    return <div onClick={() => navigate(path)}
        css={{
            maxWidth: '100%',
            height: '100%',
            minWidth: 380,
            position: 'relative',
            flexFlow: 1,
            marginBottom: 56,
            ' @media (max-width: 550px)': {
                    marginBottom: 16

                },
            '&:hover': {
                cursor: 'pointer',
                picture: {

                    '&::before': {
                        backgroundColor: '#35f',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        content: '""',
                        opacity: 0.5,
                        display: 'inline-block',
                        zIndex: 2,
                        borderRadius: 5,
                        '@media (max-width: 875px)': {
                            display: 'none'
                        },
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
        <picture
            css={{
                width: '834px',
                '&::before': {
                    content: '""',
                    transition: 'background-color 0.3s cubic-bezier(.77,0,.175,1)',
                }

            }} src={chatApp} alt='chat app' >
            <img
                css={{
                    width: '100%',
                    objectFit: 'fill',
                    filter: 'drop-shadow(3px 5px 8px #EBECF0)',
                    borderRadius: 5,

                }} src={image} alt='chat app' />
        </picture>
        <div className='details'
            css={{
                background: '#FFFFFF',
                zIndex: 3,
                border: '1px solid rgba(23, 43, 77, 0.25)',
                boxSizing: 'border-box',
                boxShadow: '3px 5px 8px #EBECF0',
                borderRadius: '4px',
                position: 'absolute',
                width: "calc(80% - 24px)",
                height: 'fit-content',
                bottom: -50,
                left: 36,
                transition: 'border 0.3s cubic-bezier(.77,0,.175,1)',
                ' @media (max-width: 866px)': {
                        height: 130,
                        left: 73,
                },
                ' @media (max-width: 700px)': {
                    width: 400,
                },
                ' @media (max-width: 580px)': {
                    width: 'auto',
                    height: 'auto'
                },
                ' @media (max-width: 550px)': {
                    position: 'static',
                    left: 0,
                    width: '100%',
                    marginRight: 0,

                }
            }}>
            <RouterLink to='/chat-app'
                css={{
                    fontSize: 20,
                    fontFamily: '"DM Serif Text", serif',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    marginBlock: 0,
                    marginTop: 8,
                    marginBottom: 8,
                    marginLeft: 16,
                    ' @media (max-width: 866px)': {
                        fontSize: 24,
                        marginLeft: 24
                },
                }}>{name}</RouterLink>
            <P
                css={{
                    marginLeft: 16,
                    marginRight: 16,
                    marginBottom: 8,
                    fontSize: 14,
                    ' @media (max-width: 866px)': {
                        fontSize: 18,
                        marginLeft: 24
                },
                    ' @media (max-width: 700px)': {
                        marginBottom: '24px'
                    },

                }}>{summary}</P>
        </div>
    </div>
}