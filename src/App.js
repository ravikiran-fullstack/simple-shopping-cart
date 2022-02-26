import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";

import { data } from "./data";

function App() {
  const { products } = data;
  console.log(products);
  return (
    <div>
      <Header></Header>
      <div className='row'>
        <Main products={products}></Main>
        <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
