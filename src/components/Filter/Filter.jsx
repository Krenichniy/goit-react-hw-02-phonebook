import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

class Filter extends Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        onFilterChange: PropTypes.func.isRequired,
    }
    render() {
        const { filter, onFilterChange } = this.props;
        return (
            <>
                <Container>
                <Heder>Contacts</Heder>
                <LabelContainer>Find contacts by Name
            
                <UserInput
                    type="text"
                    name="filter"
                    placeholder='Enter name'
                    value={filter}
                    onChange={onFilterChange} />
                </LabelContainer>
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
const Heder = styled.h2`
            color:#fff;
`
const LabelContainer = styled.label`
            display:flex;
            align-items:center;
            flex-direction:column;
            width:100%;
            margin-bottom: 15px;
            color:#fff;
`
const UserInput = styled.input`
        width: 100%;
        height: 40px;
        margin-top:10px;
        padding: 14px 0px 14px 5px;
        font-size: 14px;
        border: 1px solid rgba(33, 33, 33, 0.2);
        border-radius: 4px;
        outline: none;
        transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover,
        &:focus {
            border-color: #ff6c00;
        
        margin-top:10px
`
export default Filter;