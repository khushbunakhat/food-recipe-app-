import React, {useState,useEffect} from 'react';
import Recipe from './Recipe';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
    const params = useParams();
    const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipe();
  }, [])
  const getRecipe = async () => {
  axios
  .get(`http://localhost:5000/recipe/${params.id}`)
  .then(data => setRecipe(data.data))
  .catch(error => console.log(error));
  }
  console.log('rec', recipe)
  
    return(
        <div className="recipesDetail">
          <Recipe
            id={recipe._id}
            key={recipe.label}
            title={recipe.label}
            ingredients={recipe.ingredients}
            image={recipe.image}  
            steps={recipe.steps}
            otherPage={true}
          />
        </div>
    )
}
export default RecipeDetail