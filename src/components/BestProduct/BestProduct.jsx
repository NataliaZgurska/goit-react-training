import BestProductItem from "./BestProductItem";

const BestProduct = ({ productList }) => {
 
  return (
    <ul>
      {
        productList.map((item) => {
          return <BestProductItem key={item.id} item={ item} />
        })
      }
      
    </ul>
  )
}

export default BestProduct