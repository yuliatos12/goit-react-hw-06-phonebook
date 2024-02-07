import { useState } from "react";
import { Form, FormInput, FormButton, FormLabel } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, addContact } from "../../redux/contactsSlice";
import { nanoid } from 'nanoid';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'name':
                setName(value); 
                 break;
            case 'number':
                setNumber(value); 
                break;

                default:
                    return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const data = { name, number };
        const newContact = { ...data, id: nanoid() };

        const existingContact = contacts.find(contact => contact.name === name);

      if (existingContact) {
        alert(`${name} is already in contacts`);
        return;
      }

      dispatch(addContact(newContact));
        reset();

    }

    const reset = () => {
        setName('');
        setNumber('');
    };
    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel>
                Name
                <FormInput type="text" name="name" value={name} onChange={handleChange}/>
            </FormLabel>
            <FormLabel>
                Number
                <FormInput type="tel" name="number" value={number} onChange={handleChange}/>
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
        </Form>
    )
}