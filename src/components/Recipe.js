import React from "react";
import { useNavigate } from 'react-router-dom';
import style from './recipe.module.css';

const Recipe = ({ id,title, image, ingredients,steps,otherPage=false }) => {
    console.log("id",image,ingredients,steps);
    const navigate=useNavigate();
    const handleRecipeDetail = () => {
        window.open(`/recipeDetail/${id}`)
    }
    return (
        <>
        <div  className={otherPage?style.recipesDetail:style.recipe}>
            <h2 >{title}</h2>   
            <img className={style.image} onClick={handleRecipeDetail}  src={image} alt="img" />
         {ingredients &&    <h2>Ingredients</h2>}
        <ol>
                {ingredients?.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ol>
            {steps &&
            <h2>Steps</h2>}
        <p style={{padding:"30px",marginTop:'-30px'}}>{steps}</p>
        </div>
        </>
        
    );

}
export default Recipe;