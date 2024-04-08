import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MyLayout from './layouts/MyLayout';
import { Home } from './routes/Home';
import { Book } from './routes/Book';
import NewBook from './components/books/components/NewBook';


const App = () => {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<MyLayout/>}>
  //       <Route index element={<Home/>}></Route>
  //       <Route path="book" element={<Book/>}>
  //         <Route path="new" element={<NewBook/>}></Route>
  //       </Route>
  //     </Route>
  //   )
  // )

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MyLayout />,
      children: [ 
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/book',
          element: <Book/>,
        },
        {
          path: '/book/new',
          element: <NewBook/>,
        },
      ]

      
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
};

export default App;