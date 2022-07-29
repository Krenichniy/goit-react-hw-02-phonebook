import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components'

class Form extends Component{
    state = {
        name:''
    }

    handleInputChange = event => {
        this.setState({name:event.currentTarget.value})
    }

    
    render() {
        return (
            <FormContainer>
                <label >
                    <UserInput
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
            </FormContainer>
        )
    }
}

const FormContainer = styled.form`
            display:flex;
            align-items:center;
            margin-left:auto;
            margin-right:auto;
`

const UserInput = styled.input `
        width:250px;
        height:40px;
`
export default Form;