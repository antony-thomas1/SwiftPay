import { Navbar, Welcome, Footer, Loader, Transactions, Services } from "./Components"

const App = () => {

  return (
    <div className="min-h-screen">
      <div className=" bg-gray-900">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>  
  )
}

export default App
