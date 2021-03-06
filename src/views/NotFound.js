/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { P, RouterLink } from '../components/lib';

const NotFound = () => {
    return <div css={{
        width: '100%',
        background: '#FAFBFC',
    }}>
        <Header />
        <main css={{
            maxWidth: 834,
            marginLeft: 'auto',
            marginRight: 'auto',
            height: 'calc(100vh - 222px)',
            marginTop: 96,
            ' @media (max-width: 866px)': {
                marginRight: 32,
                marginLeft: 32,
            }
        }}>
            <div>
                <h1 css={{
                    fontFamily: '"DM Serif Text", serif',
                    fontSize: '72px',
                    color: '#172B4D',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '96.6%',
                    marginBlock: 0,
                    marginTop: 96,
                    marginBottom: 40,
                }}>
                    Page not found
                </h1>
                <P>the page you are trying to view is not found.</P>
                <RouterLink to='/' css={{
                    marginTop: 16
                }}>Take me back home</RouterLink>
            </div>

        </main>
        <Footer />
    </div>
}

export default NotFound;