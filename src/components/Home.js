import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

  
const Home = () => {
  const [recipes, setRecipes] = useState([]);
   const [search, setSearch] = useState("");
   const [query, setQuery] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [title,setTitle] = useState('');
   const [ingredient,setIngredients] = useState('');
  useEffect(() => {
    getRecipes();
  }, [query])
  const getRecipes = async () => {
  axios
  .get("http://localhost:5000/recipes")
  .then(data => setRecipes(data.data))
  .catch(error => console.log('error', error));
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    handleSearch(search)
    setSearch("");

  }
  const handleSearch =(query)=>{
    axios
    .get(`http://localhost:5000/search/${query}`)
    .then(data => setTemp(data.data))
    .catch(error => console.log(error));
  }
  const showModal = ()=>{
    setOpenModal(true)
  }
  const [temp,setTemp]=useState([])
  const handleAdd =()=>{
    const data = {label:title, ingredients: ingredient, image:'https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?w=996&t=st=1664544506~exp=1664545106~hmac=c4dc9637366b66c590490a806a94447bd492be93541eeabba79cd61c894db7f0'}
    axios
    .post(`http://localhost:5000/add-recipe`,data)
    .then(data => setRecipes([...recipes, data.data]))
    .catch(error => console.log(error));
    setOpenModal(false)
  }
  return (
    <div className="App">
       <div className='addRecipe'>
        <button className="addRecipe-button" onClick ={showModal}>Add Recipe</button>
      </div>
      <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={search}
             onChange={updateSearch} />
        <button className="search-button" type="submit" >
             Search
        </button>
      </form>
    
      <div className="recipes">
        {(temp.length>0?temp:recipes).map(recipe => (
          <Recipe
            id={recipe._id}
            key={recipe.label}
            title={recipe.label}
            image={recipe.image}    
          />
  
        ))}
      </div>
      {openModal && 
         <Modal
        show={openModal}
        onHide={() => setOpenModal(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
      <Modal.Header closeButton>
        <Modal.Title>
         Add new recepies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input onChange={(e)=>setTitle(e.target.value)}type = 'text' placeholder="add title for your recipe"/>
        <br/><br/>
        <textarea onChange={(e)=>setIngredients(e.target.value)}placeholder='add ingredients of your recipe'/><br/><br/>
        <label>Choose image of your recepie </label><br/>
        <input onChange={(e)=>console.log('heye,',e.target.files[0])}type = 'file'/>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick = {handleAdd}variant="primary">
         Save 
        </Button>
        <Button variant="secondary">
         Close
        </Button>
      </Modal.Footer>
    </Modal>
     }
  
    </div>
  );
}
  
export default Home;
