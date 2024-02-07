
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export const ContactItem = ({name, number, id}) => {
    
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id));
    return (
        <li> 
            <p>{name}: {number}</p>
            <button type="button" onClick={handleDelete}>Delete</button>
        </li>
    )
}