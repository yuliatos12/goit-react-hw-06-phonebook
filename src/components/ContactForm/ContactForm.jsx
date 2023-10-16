import { useState } from "react";
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import { addContact, getPhoneBookValue } from "redux/contactSlice";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const phoneBook = useSelector(getPhoneBookValue);

    const handleAddContact = (event) => {
        event.preventDefault();
        const data = { name, number };
        const newContact = { ...data, id: nanoid() };

        if (isNameNew(phoneBook, newContact) !== undefined) {
            alert(`${newContact.name} is already in contacts`);
            return;
        };

        dispatch(addContact(newContact));
        reset();
    };
    const isNameNew = (phoneBook, newContact) => {
        return phoneBook.find(({ name }) =>
            name.toLowerCase() === newContact.name.toLowerCase())
    };


    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
        
            default:
                break;
        };
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleAddContact}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Phone number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={handleInputChange}
                    required
                />
            </label>
            <button type="submit">
                Add contact
            </button>
        </form>
    );
};

