import Container from "./components/Container/container"
import NavBar from "./components/NavBar/navbar"
import ORMizeDocumentation from "./content/documentation/ORMizeDoc"

const App = () => {
  return (
    <div>
      <NavBar>
        <NavBar.Top href="#ormizeSection">ORMize Documentation</NavBar.Top>
        <NavBar.Item href="#installingSection">Installing</NavBar.Item>
        <NavBar.Item href="#connectionSection">Connecting</NavBar.Item>
        <NavBar.Item href="#modelSection">Model Classes</NavBar.Item>
        <NavBar.Item>Finding Registers</NavBar.Item>
        <NavBar.Item>Saving fields</NavBar.Item>
      </NavBar>
      <Container>
        <ORMizeDocumentation />
      </Container>
    </div>
  )
}

export default App