/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';

const Footer = () => {
    return <div css={{
        background: '#FFFFFF',
        boxShadow: '2px -4px 8px #EBECF0',
        height: 56,
        width: '100%',
        display: 'flex',
        alignItems: 'center',

    }}>
        <div css={{
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1,
            maxWidth: '834px',
            margin: '0 auto',
            ' @media (max-width: 866px)': {
                marginRight: 32,
                marginLeft: 32
            }
        }}>
            <p css={{
                fontFamily: 'aileron, sans-serif',
                fontSize: 18,
                color: '#172B4D'
            }}>
© Izzeddin Serge 2021</p>
        </div>
    </div>;
}

export default Footer;
