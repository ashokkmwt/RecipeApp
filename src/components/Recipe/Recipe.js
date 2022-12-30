import React, { useState } from 'react'
import styles from './recipe.module.css'
import More from '../../assets/Images/rightArrow.svg';
import Gradients from '../Gredients/Gredients';

export default function Recipe({ index, title, calories, image, ingredients }) {

  const [gradients, setGradients] = useState(false);

  return (
    <>
      <div
        className={styles.recipe}>
        <div
          style={{ flexDirection: index % 2 === 0 && 'row-reverse' }}
          className={styles.head}>
          <h1>{title.slice(0, 15)}</h1>
          <img className={styles.image} src={image} alt='recipe' />
          <img
            className={styles.more}
            onClick={() => setGradients(true)}
            width='100%'
            height='100%'
            src={More}
            alt='more' />
        </div>
      </div >
      {gradients && <Gradients image={image} title={title} ingredients={ingredients} calories={calories} setGradients={setGradients} />}
    </>
  )
}
