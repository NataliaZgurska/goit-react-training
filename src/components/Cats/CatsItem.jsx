
const CatsItem = ({ cat }) => {
   const { name, imgUrl, likes } = cat;
  return (
      <li>
     <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="380" />
      <h3>Likes: {likes}</h3>
      </li>
  )
}

export default CatsItem