import './index.css';

const Navbar = () => {
    return (
        <nav className='navBar'>
            <div className='navBarSpacing'>
                <a href='/home' className='navBarLinks'>Home</a>
                <a href='/past-tests' className='navBarLinks'>Past Tests</a>
                <a href='/competition-format' className='navBarLinks'>Competition Format</a>
                <a href='/about-us' className='navBarLinks'>About Us</a>
            </div>
        </nav>
    );
}

export default Navbar;