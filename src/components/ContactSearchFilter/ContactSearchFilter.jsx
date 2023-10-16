import { setFilter, getFilter } from "redux/contactFilterSlice";
import { useDispatch, useSelector } from "react-redux";

export const ContactSearchFilter = () => {

    const dispatch = useDispatch();

    const handleChangeFilter = (event) => {
        const { value } = event.currentTarget;
        dispatch(setFilter(value))
    };

    const contactFilter = useSelector(getFilter);
    return (
        <label>
            Find contacts by name:
            <input
                type="text"
                name="filter"
                value={contactFilter}
                required
                onChange={handleChangeFilter}
            />
        </label>
    );
};