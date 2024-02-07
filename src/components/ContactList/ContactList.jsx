import { ContactItem } from "components/ContactItem/ContactItem"
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contactsSlice";
import { getFilter } from "../../redux/filterSlice";

export const ContactList = () => {

 
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
    return(
       
        <ul>
           {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
        ></ContactItem>
      ))}
        </ul>
        
    )
}

