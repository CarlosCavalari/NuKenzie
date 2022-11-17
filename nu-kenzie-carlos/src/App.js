import FinancePage from "./components/financePage";
import InitialPage from "./components/initialPage";
import { useState } from "react";
function App() {
  const [algo, setAlgo] = useState(true);
  return (
    <>
      {algo ? <InitialPage page={setAlgo} /> : <FinancePage page={setAlgo} />}
    </>
  );
}
export default App;
