/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';
import listBullet from '../assets/listBullet.svg';
import { Link } from 'react-router-dom';

export const A = styled.a({
    color: '#35f',
    display: 'block',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'aileron, sans-serif',
    textDecoration: 'underline',
    textDecorationThickness: '1px',
    textUnderlineOffset: 2,
    textDecorationColor: 'rgba(51, 85, 255, 0.45)',
    transition: 'text-decoration-color 0.4s cubic-bezier(.77,0,.175,1)',
    '&:hover': {
        textDecorationColor: '#35f',
        cursor: 'pointer'
    }

});

export const RouterLink = ({ children, ...props }) => {
    return <Link css={{
        color: '#35f',
        display: 'block',
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'aileron, sans-serif',
        textDecoration: 'underline',
        textDecorationThickness: '1px',
        textUnderlineOffset: 2,
        textDecorationColor: 'rgba(51, 85, 255, 0.45)',
        transition: 'text-decoration-color 0.4s cubic-bezier(.77,0,.175,1)',
        '&:hover': {
            textDecorationColor: '#35f',
            cursor: 'pointer'
        }
    }} {...props}>{children}</Link>
}

export const H2 = styled.h2({
    fontFamily: '"DM Serif Text", serif',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#172B4D',
    marginBlock: 0
})
export const Ul = styled.ul({
    listStyle: 'none',
    paddingLeft: 0,
    marginBlock: 0,
    li: {
        color: '#172B4D',
        fontFamily: 'aileron, sans-serif',
        fontSize: '18px',
        marginBottom: 12,
        '&::before': {
            content: '""',
            backgroundImage: `url(${listBullet})`,
            height: 20,
            width: 20,
            display: 'inline-block',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            top: '8px'
        }
    }
});
export const P = styled.p({
    color: '#172B4D',
    fontFamily: 'aileron, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '150.19%',
    fontSize: 18,
    marginBlock: 0,
    ' @media (max-width: 866px)': {
        fontSize: 16,
    }
})
