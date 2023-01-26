import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Greeting from './components/Greeting';
import FoodList from './components/FoodList';
import Hello from './components/Hello';
import ItemMain from './components/item/ItemMain';
import TodoTemplate from './components/todo/TodoTemplate';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Join from './components/user/Join';

function App() {
  return (
    <>
      <Header />
      {/* <TodoTemplate /> */}
      <Join />
      <Footer />
    </>
  );
}

export default App;