import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import packageJson from "../package.json";

const App = () => {
  useEffect(() => {
    console.log(packageJson.version);
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
