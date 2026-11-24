import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BooksLayout from "./components/BooksLayout/BooksLayout";
import ReadingLayout from "./components/ReadingLayout/ReadingLayout";
import ReadingList from "./components/readingList/ReadingList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/books" element={<BooksLayout />} />
        <Route path="/reading" element={<ReadingLayout />}>
        <Route path=":taskId" element={<ReadingList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
