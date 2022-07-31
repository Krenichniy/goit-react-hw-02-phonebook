import PropTypes from 'prop-types';
import styled from 'styled-components'

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
const StyledItem = styled.li` 
            display:flex;
            justify-content:space-between;
            margin-bottom: 15px;
            color:#fff;
            &:last-child{
                margin-bottom: 0;
            }
`

const StyledName = styled.span`
            font-weight:600;
            font-size:16px;
            line-height:1.15;
            letter-spacing:0.05em;
            color:#fff;

`
const StyledNumber = styled.span`
            margin-right:50px;
            margin-left:10px;
            font-weight:600;
            font-size:16px;
            line-height:1.15;
            letter-spacing:0.05em;
            color:#fff;   
`
const StyledBtn = styled.button`
            min-width: 60px;
            max-height: 30px;
            border: 1px solid #ff6c00;
            border-radius: 25px;
            padding: 6px 10px;

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
export default ContactsList;