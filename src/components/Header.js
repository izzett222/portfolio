/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import { RouterLink } from './lib';
import { Link } from 'react-router-dom';

const Header = () => {
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
        }}>
            <Link to='/' css={{
                fontFamily: '"DM Serif Text", serif',
                fontSize: 20,
                color: '#172B4D',
                textDecoration: 'none'
            }}>Izzeddin</Link>
            <div css={{
                display: 'flex',
                alignItems: 'center'
            }}><RouterLink css={{ marginRight: 40 }} to="/#skills">Skills</RouterLink> <RouterLink css={{ marginRight: 40 }} to="/#projects">Projects</RouterLink><RouterLink to="/#contact">Contact</RouterLink>
            
            </div>
        </div>
    </div>;
}

export default Header;

