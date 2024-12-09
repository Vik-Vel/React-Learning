//In React is not allowed to have more than 1 element in 1 component
//1. With fragments

import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Sofia",
    "Plovdiv",
    "Kazanlak",
  ];

  return (
    // ctrl + shift + p -- wrap with abbreviature

    <>
      {/* == <Fragment> */}
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {/*We remove the old and make it with dynamic with map because we don't have for loop*/}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
    //== </Fragment>
  );
}
//1. We rename the class -> className, because the word class is reserved word
//2. ctrl+d rename all wanted words

export default ListGroup;

//2. With div
//In React is not allowed to have more than 1 element in 1 component, so we can wrap all in div
// function ListGroup() {
//   return (

//     // ctrl + shift + p -- wrap with abbreviature
//     <div>
//       <h1>List</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </div>
//   );
// }
// //1. We rename the class -> className, because the word class is reserved word
// //2. ctrl+d rename all wanted words

// export default ListGroup;
