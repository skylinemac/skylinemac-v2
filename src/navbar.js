import './index.css';

const Navbar = () => {
    return (
        <nav className='navBar'>
            <div className='navBarLinks'>
                <a href='/' style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Home</a>

                <a href='/create' style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Test</a>

                <a href='/create' style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Test2</a>

                <a href='/create' style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a> 
            </div>
        </nav>
    );
}

export default Navbar;