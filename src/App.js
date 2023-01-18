import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import AllQuize from './components/AllQuize/AllQuize';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {path : '/', element : <Main></Main>, children : [
      {path : '/', element : <Home></Home>},
      {path : '/allQuiz', element : <AllQuize></AllQuize>, loader : async()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz/')
      }},
      {path : '/blog', element : <Blog></Blog>},
    ]},
    {path : '*', element : <NotFound></NotFound>},
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
     </div>
  );
}

export default App;
