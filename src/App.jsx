import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inbox from "./Inbox";
import Trash from "./Trash";
import Spam from "./Spam";
import Error from "./Error";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inbox />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
