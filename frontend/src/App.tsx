import EmailField from "./components/shared/EmailField";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center h-screen'>
        <EmailField />
      </div>
    </>
  );
};

export default App;
