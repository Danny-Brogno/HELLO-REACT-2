import {Header} from "./components/header.js";
import {JobCounter} from "./components/main.js";
import {Footer} from "./components/footer.js";
import './App.css';

const App = () => {
  return(
    <div className="App">
      <Header />
      <JobCounter runJob="Applications schedule" fiscalYear="2021"/>
      <Footer />
    </div>
  );
};

export default App;