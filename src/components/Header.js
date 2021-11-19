/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import { RouterLink } from './lib';
import { Link } from 'react-router-dom';
import hamburg from '../assets/hamburg.svg'
import closeSvg from '../assets/close.svg'
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    return <div css={{
        background: '#FFFFFF',
        boxShadow: '2px 4px 9px #EBECF0',
        height: 70,
        width: '100%',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',

    }}>
        <div css={{
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1,
            maxWidth: 834,
            margin: '0 auto',
            ' @media (max-width: 866px)': {
                marginRight: 32,
                marginLeft: 32
            }
        }}>
            <Link to='/' css={{
                fontFamily: '"DM Serif Text", serif',
                fontSize: 20,
                color: '#172B4D',
                textDecoration: 'none'
            }}>Izzeddin</Link>
            <div css={{
                display: 'flex',
                alignItems: 'center',
                transition: 'display 0.3s',
                ' @media (max-width: 800px)': {
                    display: 'none'
                },
            }}><RouterLink css={{ marginRight: 40 }} to="/#skills">Skills</RouterLink> <RouterLink css={{ marginRight: 40 }} to="/#projects">Projects</RouterLink><RouterLink to="/#contact">Contact</RouterLink>
            </div>
            <div css={{
                display: 'none',

                ' @media (max-width: 800px)': {
                    display: 'block'
                },
            }}>
                <button onClick={() => setOpen(true)} css={{
                    background: 'none',
                    border: 'none',
                    zIndex: 40
                }}><img src={hamburg} alt='hamburg' css={{ height: 35, width: 27, }} /></button>
                {open && <div css={{
                    background: '#FAFBFC',
                    position: 'fixed',
                    height: '100vh',
                    width: '100vw',
                    top: 0,
                    right: 3,
                    zIndex: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>

                    <div>
                        <button onClick={() => setOpen(false)} css={{
                            background: 'none',
                            border: 'none',
                            zIndex: 40,
                            position: 'absolute',
                            right: 16,
                            top: 24
                        }}><img src={closeSvg} alt='close button' css={{ height: 45, width: 35, }} /></button>
                        <RouterLink css={{ fontSize: 27, marginBottom: 24 }} to="/#skills">Skills</RouterLink> <RouterLink css={{ fontSize: 27, marginBottom: 24 }} to="/#projects">Projects</RouterLink><RouterLink css={{ fontSize: 27 }} to="/#contact">Contact</RouterLink>
                    </div>
                </div>}
            </div>
        </div>
    </div>;
}

export default Header;

