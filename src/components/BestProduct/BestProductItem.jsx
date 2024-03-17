

const BestProductItem = ({ item }) => {
    const {name, imgUrl, price} = item
    
  return (
      <li>
          <h2>{name}</h2>
          <img src={imgUrl} alt={name} width="480" />
          <p>{price }</p>
    </li>
  )
}

export default BestProductItem