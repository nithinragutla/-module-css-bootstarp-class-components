import Cards from "./styleesheets&class/task/task2/fakestoreapi"
import Navbaar from "./styleesheets&class/task/restaurant"
import Carosul from "./styleesheets&class/task/corosul"
import Menu from "./styleesheets&class/task/resmenu"
import Footer from "./styleesheets&class/task/footer"
import Mapp from "./styleesheets&class/task/map"

function App() {
 

  return (
    <>
       <h1>displying api in  cards by module css with class Components:</h1>
      <Cards/><br />
      <h1>Restaurant page by classcomponent:</h1>
    <Navbaar/>
    <Carosul/>
    <Menu/>
    <Footer/>
    <Mapp/>
    </>
  )
}

export default App;
