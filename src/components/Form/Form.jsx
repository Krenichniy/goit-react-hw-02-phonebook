import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './Form.styled';

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
            <>
                <Container>
            <Header>Phonebook</Header>
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
                    <StyledBtn type='submit'>Add contact</StyledBtn>
                    </FormContainer>
                    </Container>
                </>
        )
    }
}

export default Form;