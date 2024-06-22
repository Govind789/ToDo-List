import Navbar from "./pages/common/Navbar/navBar";
import Footer  from "./pages/common/footer/footer.js";
import Todos from "./pages/todos/todos.js";


function App() {
  return (
    <div className="App">
      <Navbar title = "ToDos List" />
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;
