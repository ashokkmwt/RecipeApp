import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Recipe from './Recipe';


function App() {

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState("paneer");

  useEffect(() => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }
    getRecipes();
  }, [query]);

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input autoFocus placeholder='Search Your Favourite Dish' value={search} onChange={(e) => setSearch(e.target.value)} className='search-bar' type="text" />
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => {
          return (
            <Recipe
              key={Math.ceil(Math.random() * 100000)}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;