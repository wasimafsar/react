import { useState } from "react";
import css from "./Page1.module.css";

const isLoggedIn = false;
function Page1() {
  const user = {
    name: "Wasim",
    url: "https://i.imgur.com/yXOvdOSs.jpg",
    width: 90,
    height: 90,
  };

  const [count, setCount] = useState(0); // count will have initial value 0 , we can use count anywhere in app . 

  const products = [
    { id: "1", name: "Wasim" },
    { id: "2", name: "Rumaan" },
    { id: "3", name: "Faiza" },
  ];

  const listItems = products.map((product) => {
    // can use map to use array and convert to array of li items , then this array can be directly bound to a ul at line 41
    return <li key={product.id}>{product.name}</li>;
  });

  function buttonClicked() {
    alert("Button Clicked ");
  }

  function incrementCounter() {
    setCount(count + 1);  // count value is now incremented , u can use anywhere with {count}
  }

  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.url}
        style={{
          // other interpolations will have single { but style will have 2 {{
          width: user.width,
          height: user.height,
        }}
        className={css.avatar}
      />
      {
        isLoggedIn && <button>Ola</button> // conditional rendering
      }
      <div>
        {
          isLoggedIn ? <button>OLa </button> : <div>Ola Div</div> // another way to conditional render
        }
      </div>
      <ul> {listItems}</ul>

      <button
        onClick={buttonClicked} // event listener uses onclick event and calls buttonclicked function
      >
        Click Me
      </button>

      <button onClick={incrementCounter}>State Count</button>
      <span>Clicked {count} times</span>
    </>
  );
}

export default Page1;
