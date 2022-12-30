import React from 'react'
import Close from '../../assets/Images/close.svg';
import styles from './Gredients.module.css';

export default function Gradients({ image, title, ingredients, calories, setGradients }) {
    return (
        <div className={styles.container}>
            <div className={styles.ingredients}>
                <div className={styles.header}>
                    <img
                        width='100%'
                        height='100%'
                        className={styles.image}
                        src={image}
                        alt='recipe'
                    />
                    <h1>{title}</h1>
                </div>
                <img
                    className={styles.closeImg}
                    onClick={() => setGradients(false)}
                    width='100%'
                    height='100%'
                    src={Close}
                    alt='close'
                />
                {ingredients.map((ingredient, index) => (
                    <div className={styles.grads} key={index}>{ingredient.text}</div>
                ))}
                <div className={styles.grads}>Calories-{calories}</div>
            </div>
        </div>
    )
}