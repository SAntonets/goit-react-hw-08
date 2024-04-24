import AppBar from "../AppBar/AppBar"
function Layout( {children} ) {
  return (
    <>
    <header>
      <AppBar />
    </header>
    <main>
     {children}
    </main>
    </>
  )
}

export default Layout