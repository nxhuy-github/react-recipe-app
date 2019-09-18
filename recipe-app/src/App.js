import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe'
import './App.css';

const App = () => {
  const APP_ID = "756b92a7"
  const APP_KEY = "3f96697083d16ba7df184028e9aa17fa"

  /**
   * Create State for components with useState() function
   */
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  /**
   * @param1 function
   * @param2 if we don't use this arg => useEffect() will run everytime react re-render
   *         if we pass an empty array =>  useEffect() run only one time when react get mounted
   *         if we pass an array contain a variable (e.g a state) => useEffect() run only this variable being changed
   */
  useEffect(() => {
    console.log("Effect has been running")
    getRecipes()
  }, [query]) // this function only run when "query" is changed

  /**
   * Other method to use fetch()
   */
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits) 
  }

  const updateSearch = (event) => {
    setSearch(event.target.value)
  }

  const getSearch = (event) => {
    event.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form" >
        <input 
          onChange={updateSearch} 
          value={search} 
          className="search-bar" type="text"
        />
        <button className="search-button">Search</button>
      </form>
      {recipes.map((ele, idx) => {
        return (
        <Recipe key={idx} recipe={ele} />
        )
      })}
    </div>
  );
}

export default App;
