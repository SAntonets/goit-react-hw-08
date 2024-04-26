import Contact from "../Contact/Contact"; 
import clsx from "clsx";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";
import { selectFilteredContacts } from '../../redux/contacts/slice';







const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    return ( <ul className={css.contactList}> 
        { filteredContacts && filteredContacts.map(contact => (
            <li key={contact.id}><Contact  id={contact.id} name={contact.name} number={contact.number} /></li>
        ))}</ul>
    );
}


export default ContactList;
