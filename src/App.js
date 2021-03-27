import Container from "./components/container/container";
import Account from "./components/sidebar/account/account";
import SideBarContainer from "./components/sidebar/sidebarContainer/sidebarContainer";

function App() {
  return (
    <div className="App">
      <Container>
        <SideBarContainer>
          <section className="section">
            <Account />
          </section>
        </SideBarContainer>
      </Container>
    </div>
  );
}

export default App;
