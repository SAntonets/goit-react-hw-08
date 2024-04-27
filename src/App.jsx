
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import './App.css'
import { refreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { selectIsRefreshing } from "./redux/auth/slice";




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
  
  
  const isRefreshing = useSelector(selectIsRefreshing);  
  
  if (isRefreshing) {
    return <Loader />
  }

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute><RegistrationPage /></RestrictedRoute> } />
          <Route path="/login" element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
          <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        </Layout>
  )
}

export default App;