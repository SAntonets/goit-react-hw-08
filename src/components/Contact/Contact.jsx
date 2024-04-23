import clsx from "clsx";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {

    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
        <div className={css.Contact} id={id}>
            <div className={css.ContactData}><p>😀{name }</p>
            <p>☎ {number }</p></div>
            <button className={css.ContactBTN} onClick={handleDelete}>Delete</button> 
        </div>
    );
};

export default Contact;

