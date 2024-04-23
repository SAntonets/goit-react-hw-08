import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import { selectIsLoading, selectError } from "./redux/contacts/slice";
import Loader from "./components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchContacts } from "./redux/contacts/operations";

function App() {


  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

      const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

  
  return (
    <>
      
      <h1>Phonebook</h1>
          <RegistrationPage />
          <ContactForm  />
          <SearchBox />
          {isLoading && <Loader />}
          { isError && <p>Something went wrong</p>}
          <ContactList />
  
    </>
  )
}

export default App;