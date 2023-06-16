import './App.css';
import { Root } from './components/Root/Root';
import { HomePage } from './components/HomePage/HomePage';
import { BlogList } from './components/Blog/BlogList';
import { Article } from './components/Blog/Article';
import { SearchPage } from './components/Blog/Search/SearchPage';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<HomePage />} />
    <Route path="/blog" element={<BlogList />} />
    <Route path="/blog/:urlName" element={<Article />} />
    <Route path="/blog/search" element={<SearchPage />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
