import { Route, Routes } from "react-router-dom";
import EmailField from "./components/shared/EmailField";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center h-screen'>
        <Routes>
          <Route path='/send-email' element={<EmailField />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
