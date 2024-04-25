
import Loader from "./components/Loader/Loader";
import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from 'react';
import { fetchContacts } from "./redux/contacts/operations";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import './App.css'
import { refreshUser } from "./redux/auth/operations";



function App() {

  const HomePage = lazy(() => import('./pages/HomePage'))
  const NotFound = lazy(() => import('./pages/NotFoundPage'))
  const LoginPage = lazy(() => import('./pages/LoginPage'))
  const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))
  const ContactsPage = lazy(() => import('./pages/ContactsPage'))
  

 

    const dispatch = useDispatch();
 
    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);
    

  
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        </Layout>
  )
}

export default App;