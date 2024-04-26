import { useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar"
import { selectIsError } from "../../redux/auth/slice";
function Layout({ children }) {

  const isError = useSelector(selectIsError);

  return (
    <>
    <header>
      <AppBar />
      </header>
    {isError ? <p>Something went wrong. Please try again later.</p> : <main>
     {children}  
    </main>}
    </>
  )
}

export default Layout