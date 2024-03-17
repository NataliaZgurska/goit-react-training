// src/components/App.jsx
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

//  const productList =  [
//     {
//          name: "Tacos With Lime",
//          imgUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//          price: 10.99,
//           id: 1812
//     },
//    {
//          name: "Fries and Burger",
//          imgUrl: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640",
//          price: 14.29,
//           id: 1820
//     }
//   ]

import productList from './productList.json'
import BestProduct from "./BestProduct";
import BookList from "./BookList";


export default function App() {
  return (
  <>
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
