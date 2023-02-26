import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { plane-departure } from '@fortawesome/free-solid-svg-icons'

import "./App.css";

function App() {
  return (
    <div className="mt-8 App">
      <FontAwesomeIcon icon={faPlaneDeparture} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
