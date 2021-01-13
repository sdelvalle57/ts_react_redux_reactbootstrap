import React, {Component} from 'react';
import Head from 'next/head'
import { Container} from 'react-bootstrap';
import Favicon from 'react-favicon';

class StoreLayout extends Component {

    render() {
        return (
            <Container className='parent' >
                <Favicon url="/static/images/favicon.png" />
                <Head>
                    <link 
                        rel="stylesheet" 
                        href="/static/css/index.css" />
                </Head>
                {this.props.children}
            </Container>
        );
    }
}

export default StoreLayout;

