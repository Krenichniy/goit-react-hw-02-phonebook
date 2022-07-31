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
                <h2>Contacts</h2>
                <label>Find contacts by Name
            
                <UserInput
                    type="text"
                    name="filter"
                    placeholder='Enter name'
                    value={filter}
                    onChange={onFilterChange} />
            </label>
            </>
        )
    }
}

const UserInput = styled.input`
        width:250px;
        height:40px;
        margin-top:10px
`
export default Filter;