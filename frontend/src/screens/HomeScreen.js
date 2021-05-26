import React from 'react'
import { Container } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <Container className="landing-page">
                <div className="title"> 
                    <h1>Welcome to the Bank</h1>
                    <br />
                </div>


                <img className="bank-img" src="/bank.png" alt="bank" />

            </Container>
        </>
    )
}

export default HomeScreen
