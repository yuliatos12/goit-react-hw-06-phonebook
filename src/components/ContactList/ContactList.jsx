import { getFilter } from "redux/contactFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { deletingContact, getPhoneBookValue } from "redux/contactSlice";



export const ContactList = () => {
    const dispatch = useDispatch();

    const phoneBook = useSelector(getPhoneBookValue);
    const filterPhoneBook = useSelector(getFilter);

    const lowerFilter = filterPhoneBook.toLowerCase();
    const availableContacts = phoneBook.filter(({ name }) =>
        (name.toLowerCase().includes(lowerFilter)));
  
    const deleteContact = (contactId) => {
        dispatch(deletingContact(contactId))
    };
    
    return (
        <ul>
            {availableContacts.map(({ name, number, id }) => (
                <li key={id}>
                    <p>{name}: {number}</p>
                    <button type="button" onClick={() => deleteContact(id)}>Delete</button>
                </li>))}
        </ul>
    );
};