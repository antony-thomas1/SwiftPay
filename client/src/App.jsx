import { Navbar, Welcome, Footer, Loader, Transactions, Services } from "./Components"

const App = () => {

  return (
    <div className="min-h-screen">
      <div className=" bg-gradient-to-b from-gray-900 to-slate-700">
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
