import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';
import styles from "./styles/Heart.module.css"

const Heart = ({id, liked=false}) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const listFavoritesId = useSelector(state => state.listFavorites?.id)

  const handleLike = () => {
    if(auth){
      liked
        ? dispatch(removeFavorite(id, listFavoritesId))
        : dispatch(addFavorite(id, listFavoritesId))
    }else{
      alert("Registrese para poder guardar favoritos");
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.toggleHeart}
        id={styles.toggleHeart + id}
        type="checkbox"
        checked={liked}
        onChange={handleLike}
      />
      <label
        className={styles.toggleHeartFor}
        htmlFor={styles.toggleHeart + id}
        aria-label="like">
        ❤
      </label>
    </div>
  )
}

export default Heart;
