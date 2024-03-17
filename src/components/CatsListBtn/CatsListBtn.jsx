
const CatsListBtn = ({likes, handleLogLikes, handleResetLikes, totalLike }) => {
    
  return (
      <>
         <button  onClick={() => handleLogLikes('cat1')}>
            Night Cat: {likes.cat1} likes
      </button>
               <button  onClick={() => handleLogLikes('cat2')}>
            Forest Cat: {likes.cat2} likes
      </button>
               <button  onClick={() => handleLogLikes('cat3')}>
            Small Cat: {likes.cat3} likes
      </button>
       <button  onClick={() => handleLogLikes('cat4')}>
           Blue Eyes Cat: {likes.cat4} likes
              </button>
              
    {totalLike >0 && <button  onClick= {handleResetLikes}>
          Reset likes
          </button>}
    </>
  )
}

export default CatsListBtn