
import './App.css';
import { useState,useContext, createContext } from 'react';
import Categories from './cateogry';
import Menu from './menu';
import data from './data.json';
export const Menucontext = createContext();
const cateogriesarray = data.map((el, i) => { return el.category });
function App() {
  const [all, setall] = useState(data);
  const [menu, setmenu] = useState(data);
  const [cat, setcat] = useState(new Set(["all", ...cateogriesarray]));

    
  const filter = (a) => {
    setmenu(data);
  

    
      if (a !== "all") {
        setmenu(data);
        let selectedmenu = data.filter((ele) => {
          return ele.category === a
        }, a);
        setmenu(selectedmenu);
      }
 
 

  }
  return (
    <Menucontext.Provider value={{ menu, cat, filter }}>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories  />
          <Menu />
        </section>
      </main>
    </Menucontext.Provider>
   
  );
}

export default App;
