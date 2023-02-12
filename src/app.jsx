import Container from "./components/Container/container"
import NavBar from "./components/NavBar/navbar"

const App = () => {
  return (
    <div>
      <NavBar>
        <NavBar.Top>ORMize Documentation</NavBar.Top>
        <NavBar.Item>Installing</NavBar.Item>
        <NavBar.Item>Connecting</NavBar.Item>
        <NavBar.Item>Model Classes</NavBar.Item>
        <NavBar.Item>Finding Registers</NavBar.Item>
        <NavBar.Item>Saving fields</NavBar.Item>
      </NavBar>
      <Container>
        <h1>Installing</h1>
      </Container>
    </div>
  )
}

export default App