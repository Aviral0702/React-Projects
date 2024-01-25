import '../App.css';
const Navigation=()=>{
    return (<div>
        <nav className='container'>
        <div>
          <img src="public/images/brand_logo.png" alt="logo"></img>
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
        </nav>
      </div>)
}
export default Navigation;
