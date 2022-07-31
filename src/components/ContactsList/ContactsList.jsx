import PropTypes from 'prop-types';

const ContactsList = ({list, removeItem}) => {
    return (
        <>
        <ul>
             {list.map((el) => (
                 <li key={el.id}>
                     <span>{el.name}</span>:    
                     <span>{el.tel}</span>
                     <button onClick={()=> removeItem(el.id)}>Delete contact</button>
                     </li>))}
            </ul>
        </>
    )
}

ContactsList.propType = {
    list: PropTypes.array.isRequired, 
    removeItem: PropTypes.func.isRequired
}
export default ContactsList;