import css from './Cats.module.css'
import CatsItem from "./CatsItem"

const Cats = ({ cats }) => {

  return (
      <ul className={css.catList}>
          {cats.map((cat) => {
              return <CatsItem key={cat.id} cat={cat } />
         })}
          
    </ul>
  )
}

export default Cats