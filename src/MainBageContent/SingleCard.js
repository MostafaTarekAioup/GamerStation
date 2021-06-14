import React ,{useState} from 'react'
import {useGlopalContext} from '../Context'
import { Link } from "react-router-dom";
import { FaHeart ,FaLayerGroup , FaSearch , FaAngleLeft} from "react-icons/fa";

const SingleCard = ({background_image , id , name  , metacritic } ) => {
const {lastGame} = useGlopalContext()
 const [isHover , setIsHover] = useState(false)

 return<div ref={lastGame}  className="game-card" key={id} onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)}>
        <div className="game-image">
          <img src={background_image} alt={name} />
          <div className={`${isHover? 'game-details-icon game-details-icon-active ' : 'game-details-icon'}`}>
            <Link to={`/game-details/${id}`}>
              <FaAngleLeft className='streatch-up-left'/>
              <FaAngleLeft className='streatch-up-right'/>
              <FaAngleLeft className='streatch-down-left'/>
              <FaAngleLeft className='streatch-down-right'/>
              <FaSearch className='search-icon'/>
              </Link>
            </div>
        </div>
        <div className="details">
          <h3>{name}</h3>
          <div className="rate-details">
            <h3 className='game-rate'>Rate : {metacritic}</h3>
            <h3 className='game-rate'>
              <Link className='details-btn' to={`/game-details/${id}`}> Details</Link>
            </h3>
          </div>
        </div>
        <div className={`${isHover? 'favorit fav-active' : 'favorit'}`}>
         <div className="icons">
          <FaHeart className='fav-icon'/>
          <FaLayerGroup className='fav-icon'/>
         </div>
        </div>
      </div>
}

export default SingleCard
