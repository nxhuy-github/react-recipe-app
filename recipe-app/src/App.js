import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe'
import './App.css';

const App = () => {
  const APP_ID = "756b92a7"
  const APP_KEY = "3f96697083d16ba7df184028e9aa17fa"

  const ex = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  /**
   * Create State for components with useState() function
   */
  const [recipes, setRecipes] = useState([])

  /**
   * @param1 function
   * @param2 if we don't use this arg => useEffect() will run everytime react re-render
   *         if we pass an empty array =>  useEffect() run only one time when react get mounted
   *         if we pass an array contain a variable (e.g a state) => useEffect() run only this variable being changed
   */
  useEffect(() => {
    getRecipes()
  }, [])

  /**
   * Other method to use fetch()
   */
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits) 
  }

  return (
    <div className="App">
      <form className="search-form" >
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit" >Search</button>
      </form>
      {recipes.map((ele) => {
        return (
        <Recipe recipe={ele} />
        )
      })}
    </div>
  );
}

export default App;
