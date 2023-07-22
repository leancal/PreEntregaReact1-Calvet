import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <ItemListContainer greeting={ "Bienvenidos" }/> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer greeting={ "Bienvenidos" }/> } />
          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ <h1>404 Page Not Found</h1> } />
        </Routes>
      </Router>        
    </div>
  );
}

export default App;
