import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Logs from "./pages/Logs";
import SendEmail from "./pages/SendEmail";
import LogsDetailsPage from "./pages/LogsDetailsPage";

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1 flex-col justify-center items-center pt-30 mx-20'>
        <Routes>
          <Route path='/send-email' element={<SendEmail />} />
          <Route path='/logs' element={<Logs />} />
          <Route path='/logs/:id' element={<LogsDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
