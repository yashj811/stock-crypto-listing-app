import logo from '../../Assets/Logo.png';
const Navbar = () => {
    return <nav className="navbar navbar-light" style={{backgroundColor : 'rgb(3, 28, 71, 90%)', padding : 0}}>
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1"><img src={logo} alt='logo'/></span>
    </div>
  </nav>
}


export default Navbar;