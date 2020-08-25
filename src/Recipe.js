
import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1 style={{marginBottom:'10px',textShadow:"2px 2px 5px red"}}>{title} </h1>
      <ol style={{fontSize:'20px',fontFamily:'Rye, cursive'}}>
        {ingredients.map(ingredient => (
          <li >{ingredient.text}</li>
        ))}
      </ol>
      <p style={{marginTop:'10px',fontSize:'20px',color:'green'}}>Calories: {calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;