import React from 'react'
import styles from './recipe.module.css'

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={styles.recipe}>
      <div className={styles.head}>
        <h1>{title}</h1>
        <img className={styles.image} src={image} alt='recipe' />
      </div>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <h4>Calories-{calories}</h4>

    </div>
  )
}
