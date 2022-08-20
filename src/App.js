import Navbar from './Components/NavBar/Navbar'
import './App.css'
import Banner from './Components/Bannner/banner';
import RowPost from './Components/Row-post/row-post';
import {actionGerner,horrorGerner,netflixOriginals} from './Urls'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPost url={netflixOriginals} title='Netflix Originals' isNetflixOriginals />
     <RowPost url={actionGerner} title='Action' isAction />
     <RowPost url={horrorGerner} title='Horror' isHorror  />
    </div>
  );
}

export default App;
