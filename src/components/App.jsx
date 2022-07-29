import React, { Component } from 'react';
import Form from './Form';
import styled from 'styled-components'
class App extends Component {
  render() {
        return (
      <Container>
            <Form/>
        
      </Container>
    );
   }

};

const Container = styled.div`
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
`

export default App;