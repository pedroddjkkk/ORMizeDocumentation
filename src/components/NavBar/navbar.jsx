import "./index.css"

const NavBar = (props) => {
  return (
    <nav>
      {props.children}
    </nav>
  )
}

NavBar.Item = (props) => {
  return (
    <h1>
      {props.children}
    </h1>
  )
}

export default NavBar