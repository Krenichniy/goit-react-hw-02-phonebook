import PropTypes from 'prop-types';
import {Container, } from '../Form/Form.styled'
import {StyledItem, StyledName, StyledNumber,StyledBtn} from './Contacts.styled'

const ContactsList = ({list, removeItem}) => {
    return (
        <>
            <Container>
        <ul>
             {list.map((el) => (
                 <StyledItem key={el.id}>
                     <StyledName>{el.name}</StyledName>:    
                     <StyledNumber>{el.tel}</StyledNumber>
                     <StyledBtn onClick={()=> removeItem(el.id)}>Delete contact</StyledBtn>
                     </StyledItem>))}
                </ul>
            </Container>
        </>
    )
}

ContactsList.propType = {
    list: PropTypes.array.isRequired, 
    removeItem: PropTypes.func.isRequired
}


export default ContactsList;