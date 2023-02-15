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
    <a className="navbarItem" href={props.href}>
      {props.children}
    </a>
  )
}

NavBar.Top = (props) => {
  return (
    <a className="navbarTop" href={props.href}>
      {props.children}
    </a>
  )
}

export default NavBar