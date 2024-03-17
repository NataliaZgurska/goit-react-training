// src/components/App.jsx
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


export default function App() {
  return (
    <>
      <div>
        <h1>Send Likes for cats</h1>
        <CatsListBtn cats={cats}/>
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
