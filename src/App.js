import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Recipe from './components/Recipe/Recipe';
import axios from 'axios';
import Header from './components/Header/Header';


function App() {

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState("paneer");

  useEffect(() => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    axios({
      method: 'get',
      url: `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    }).then(res => {
      setRecipes(res.data.hits);
    }).catch(err => console.log(err));
  }, [query]);

  return (
    <div className='parent'>
      <Header setSearch={setSearch} setQuery={setQuery} search={search} />
      {recipes.length > 0 ?
        <div className='recipes'>
          {recipes.map((recipe, i) => {
            return (
              <Recipe
                key={Math.ceil(Math.random() * 100000)}
                index={i}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            )
          })}
        </div> :
        <h1>No Data Available</h1>
      }
    </div>
  );
}

export default App;