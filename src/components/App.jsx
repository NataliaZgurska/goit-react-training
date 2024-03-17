// src/components/App.jsx
import { useState } from 'react';
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

import productList from './productList.json'
import cats from './cats.json'

import BestProduct from "./BestProduct/BestProduct";
import BookList from "./BookList";
import Cats from './Cats/Cats';
import CatsListBtn from './CatsListBtn/CatsListBtn';


const initialLikes = { cat1: 0, cat2: 0, cat3: 0, cat4: 0 };


export default function App() {
  const [likes, setLikes] = useState(initialLikes );

  const handleLogLikes = (catName) => {
  setLikes({ ...likes, [catName]: likes[catName] + 1 })
  };
  const handleResetLikes = () => { setLikes(initialLikes); };
 const totalLike = Object.values(likes).reduce((acc, item) => acc+item, 0)
 
  
  return (
    <>
      <div>
        <h1>Send Likes for cats</h1>
        <CatsListBtn likes={likes}
          handleLogLikes={handleLogLikes}
          handleResetLikes={handleResetLikes}
       totalLike={totalLike}
        />
      </div>
      <div>
        <h1>Best cats</h1>
        <Cats cats={cats} />
      </div>

     <div>
			<h1>Books of the week you have to read</h1>
      <BookList books={favouriteBooks} />
      </div>
      
      <div>
        <h1>Best products</h1>
        <BestProduct productList={ productList} />
      </div>
  </>
  );
}
