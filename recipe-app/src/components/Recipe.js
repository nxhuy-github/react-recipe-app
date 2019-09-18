import React from 'react'
import style from './Recipe.module.css'

const Recipe = ({recipe}) => {
  return (
    <div className={style.recipe}>
      <h1>{recipe.recipe.label}</h1>
      <ol>
        {recipe.recipe.ingredients.map((ingredient, idx) => {
          return (
          <li key={idx}>{ingredient.text}</li>
          )
        })}
      </ol>
      <p>{recipe.recipe.calories}</p>
      <img className={style.image} src={recipe.recipe.image} alt="" />
    </div>
  )
}

export default Recipe