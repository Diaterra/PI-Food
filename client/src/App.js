import './App.css';
import { Route, Switch} from 'react-router-dom';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Paginations from './components/Pagination/Pagination';
import Recipe from './components/Recipe/Recipe';
import Details from './components/Details/Details';
import Filters from './components/Filters/Filters';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Resources from './components/Resources/Resources';
import SearchBar from './components/SearchBar/SearchBar';
import Loading from './components/Loading/Loading';

function App() {
  return (

    <div className="App">
      <h1>Henry Food</h1>
      <Route exact path="/recipes" render={() => <Home/>} />
      {/* <CreateRecipe></CreateRecipe>
      <Details></Details>
      <Filters></Filters>
     
      <LandingPage></LandingPage>
      <Loading></Loading>
      <Paginations></Paginations>
      <Recipe></Recipe>
      <Resources></Resources>
      <SearchBar></SearchBar> */}

    </div>
  
  );
}

export default App;
