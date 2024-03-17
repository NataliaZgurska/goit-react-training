
const CatsListBtn = ({cats}) => {
  return (
      <>
          {cats.map((cat) => {
              return <button key={cat.id}>
                  {cat.name}
              </button>
          })}
    </>
  )
}

export default CatsListBtn