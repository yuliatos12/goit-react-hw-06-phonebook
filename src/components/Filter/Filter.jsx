import { useDispatch, useSelector } from "react-redux";
import { getFilter, setFilter } from "../../redux/filterSlice";


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value))

    return(
        <label>
                   Find contact <input type="text" name="filter" value={filter} onChange={handleFilterChange}  />
        </label>
    )
}