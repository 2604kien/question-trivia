import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Question from "./Question/Question";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Question/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
