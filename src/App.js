import Container from "./features/Container"
import Home from "./features/Home";
import NavBar from "./features/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
