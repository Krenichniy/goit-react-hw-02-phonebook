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

const Container = styled.div`
            max-width:450px;
            margin-left:auto;
            margin-right:auto;
            margin-bottom:30px;
            padding:15px;
            background: #555555;
            border-radius: 4px;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
                0px 2px 1px rgba(0, 0, 0, 0.2);
`
const Header = styled.h1`
            margin-top:0;
            color:#fff;
`
const FormContainer = styled.form`
            display:flex;
            align-items:center;
            flex-direction:column;
            width:100%;
            margin-left:auto;
            margin-right:auto;
             
`
const LabelContainer = styled.label`
            display:flex;
            align-items:center;
            flex-direction:column;
            width:100%;
            margin-bottom: 15px;
            color:#fff;
`
const UserInput = styled.input `
        width: 100%;
        height: 40px;
        margin-top:10px;
        padding: 14px 0px 14px 45px;
        font-size: 18px;
        border: 1px solid rgba(33, 33, 33, 0.2);
        border-radius: 4px;
        outline: none;
        transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover,
        &:focus {
            border-color: #ff6c00;
        
`

const StyledBtn = styled.button`
            min-width: 160px;
            max-height: 40px;
            border: 1px solid #ff6c00;
            border-radius: 25px;
            padding: 12px 20px;

            font-weight: 600;
            font-size: 12px;
            line-height: 1.33;
            letter-spacing: 0.09em;
            color: #fff;
            background-color: transparent;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
            text-transform: uppercase;
            cursor: pointer;

            &:hover, &:focus{
                color:#000;
                background-color:#ff6c00;
            }
`
export default Form;