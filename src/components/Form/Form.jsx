import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

class Form extends Component {
    state = {
        name: '',
        tel: ''
    }
    
     static propTypes = {
        addNewContact: PropTypes.func.isRequired,
        onNotValid: PropTypes.func.isRequired,
    };

    handleChange= (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }  

    formValidation( event, callback, showMessage) {
        event.preventDefault();
        
        const { name, tel } = this.state;
        if (!name || !tel) return showMessage('Please fill all filds');

        const isExist = callback({ name, tel });

        if (!isExist) this.reset();
        
    }

    reset= ()=> {
        this.setState({   name: '',tel: ''})
    }
    render() {
        const { name, tel } = this.state;
        const { addNewContact, onNotValid } = this.props;
        return (
            <FormContainer onSubmit={(event) => {this.formValidation(event, addNewContact, onNotValid)}}>
                <LabelContainer >
                    Name
                    <UserInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange} />
                </LabelContainer>

                <LabelContainer >
                    Phone Number
                    <UserInput
                        type="tel"
                        name="tel"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        title="Tel may contain only numbers. For example 654-59-78"
                        required
                        value={tel}
                        onChange={this.handleChange} />
                </LabelContainer>
                <button type='submit'>Add contact</button>
            </FormContainer>
        )
    }
}

const FormContainer = styled.form`
            display:flex;
            align-items:center;
            flex-direction:column;
            width:450px;
            margin-left:auto;
            margin-right:auto;
`
const LabelContainer = styled.label`
            display:flex;
            align-items:center;
            flex-direction:column;
            margin-bottom: 15px;
`
const UserInput = styled.input `
        width:250px;
        height:40px;
        margin-top:10px
`
export default Form;