import React from 'react'
import './bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import AllCustomerScreen from './screens/AllCustomerScreen'
import HomeScreen from './screens/HomeScreen'


const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Route path='/' component={HomeScreen} exact />
          <Route path='/customer' component={AllCustomerScreen} />
        </main>

      </Container>

      <Footer />

    </Router>
  );
}

export default App;
