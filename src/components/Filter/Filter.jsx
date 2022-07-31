import { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Header, LabelContainer, UserInput } from '../Form/Form.styled'

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
                <Header>Contacts</Header>
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


export default Filter;