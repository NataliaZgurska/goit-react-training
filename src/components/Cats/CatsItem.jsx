
const CatsItem = ({ cat }) => {
   const { name, imgUrl } = cat;
  return (
      <li>
     <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="280" />
      
      </li>
  )
}

export default CatsItem