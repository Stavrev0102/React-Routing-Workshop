/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import * as gameService from "../../services/gameService";
import { useNavigate, useParams } from 'react-router-dom';


export default function GameEdit(){
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game,setGame] = useState({});

    useEffect(() => {
        gameService.getOne(gameId)
        .then(result => {
            setGame(result)
        })
    },[gameId])

    const editGameSubmitHandler = async(values) => {
       try {
         await gameService.edit(gameId,values);
         navigate('/games')
       } catch (error) {
        //error notification
          console.log(error);
       }   
    }

    const { values, onChange, onSubmit} = useForm(editGameSubmitHandler, game)

    return(
        <section id="create-page" className="auth">
        <form id="create" onSubmit={onSubmit}>
          <div className="container">
              
            <h1>Edit Game</h1>
  
            <label htmlFor="leg-title">Legendary title:</label>
            <input type="text" onChange={onChange} value={values.title}  id="title" name="title" placeholder="Enter game title..." />
  
            <label htmlFor="category">Category:</label>
            <input type="text" onChange={onChange} value={values.category}  id="category" name="category" placeholder="Enter game category..." />
            
            <label htmlFor="levels">MaxLevel:</label>
            <input type="number" onChange={onChange} value={values.maxLevel}  id="maxLevel" name="maxLevel" min={1} placeholder={1} />
  
            <label htmlFor="game-img">Image:</label>
            <input type="text" onChange={onChange} value={values.imageUrl}  id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
  
            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" onChange={onChange} value={values.summary} id="summary" defaultValue={""} />
  
            <input className="btn submit" type="submit" value='Edit Game' defaultValue="Edit Game" />
          
          </div>
        </form>
      </section>

    )
}