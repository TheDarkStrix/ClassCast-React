import Bubble from "./components/sidebar/bubble/bubble";
import Container from "./components/container/container";
import Account from "./components/sidebar/account/account";
import Health from "./components/sidebar/health/health";
import SideBarContainer from "./components/sidebar/sidebarContainer/sidebarContainer";
import Training from "./components/sidebar/training/training";
import Dots from "./components/sidebar/dots/dots";
import Trainers from "./components/sidebar/trainers/trainers";
import Section from "./components/section/section";

function App() {
  return (
    <div className="App">
      <Container>
        <SideBarContainer>
          <Section>
            <Account />
            <Health />
            <Bubble />
            <Training />
            <Dots />
          </Section>
          <Trainers />
        </SideBarContainer>
      </Container>
    </div>
  );
}

export default App;
