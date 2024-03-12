import './index.css';
import logo from './ClubLogo.png';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='navBarLogo'>
                <img src={logo} alt="" width={50} height={50}/>  
                <a href='/' className='navBarLinks' style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "5%"
                }}> Skyline Mathematical Applications Contest </a>
            </div>
            <div className='navBarText'>
                <a href='/home' className='navBarLinks'>Home</a>
                <a href='/past-tests' className='navBarLinks'>Past Tests</a>
                <a href='/competition-format' className='navBarLinks'>Competition Format</a>
                <a href='/about-us' className='navBarLinks'>About Us</a>
            </div>
        </div>
    );
}

export default Navbar;