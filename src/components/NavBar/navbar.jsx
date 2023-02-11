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
    <div className="navbarItem">
      {props.children}
    </div>
  )
}

export default NavBar