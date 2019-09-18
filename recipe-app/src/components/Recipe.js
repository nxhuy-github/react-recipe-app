import React from 'react'

const Recipe = ({recipe}) => {
  return (
    <div>
      <h1>{recipe.recipe.label}</h1>
      <p>{recipe.recipe.calories}</p>
      <img src={recipe.recipe.image} alt="" />
    </div>
  )
}

export default Recipe