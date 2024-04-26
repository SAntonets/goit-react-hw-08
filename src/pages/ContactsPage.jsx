import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError } from "../redux/contacts/slice";
function ContactsPage() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsError = useSelector(selectError)
  
  return (
  <>
    {contactsError ? <p>Something went wrong. Please try again later.</p> :  
    (<><ContactForm />
    <SearchBox />
    <ContactList /> </>)}
    </>
  )
}

export default ContactsPage