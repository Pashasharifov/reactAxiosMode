import Header from "./Components/Header";
import Firstpart from "./Components/firstpart";
import Secondpart from "./Components/secondpart";
import Thirdpart from "./Components/thirdpart";
import Footer from "./Components/footer";
function App() {
  return (
    <> 
    <Header></Header>
    <Firstpart soz="Enjoy on your TV." ses="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."></Firstpart>
    <Secondpart></Secondpart>
    <Thirdpart soz="Watch everywhere." ses="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."></Thirdpart>
    <Footer></Footer>
    </>
  );
}

export default App;
