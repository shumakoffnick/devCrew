import MainPage from "./components/MainPage/MainPage";
import Newcomer from "./components/Newcomer/Newcomer";
import PopularTools from "./components/PopularTools/PopularTools";
import SliderBlock from "./components/Slider/Slider";
import Trusted from "./components/Trusted/Trusted";
import Header from "./header/Header";
import Form from './components/Form/Form'
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <PopularTools/>
      <Trusted/>
      <Newcomer/>
      <SliderBlock/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
