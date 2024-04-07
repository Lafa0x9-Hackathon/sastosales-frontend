import './navbar.css'
import Logo from './icons/sastosalesLogo.png'
import Filter_icon from './icons/Faders.png'
import search_icon from './icons/MagnifyingGlass.png'
import add_icon from './icons/AddProd.png'
import cart_icon from './icons/ShoppingCartSimple.png'
import down_arrow_icon from './icons/ChevronDown.png'

function Navbar() {
    return (
        <div className='nav-bar-container'>
            <img className='sasto-sales-logo' src={Logo} alt="sasto-sales-logo" />
            <div className='left-side-nav'>
                <div className="filter-contaier">
                    <img className='filter-icon' src={Filter_icon} alt="filter-icon" />
                    <p>Filter</p>
                    <div className="filter-number">5</div>
                </div>
                    <div className="search-container">
                    <img className='search-icon' src={search_icon} alt="search-icon" />
                    <input type="text" placeholder='Project 1' />
                </div>
            </div>
            <div className='right-side-nav'>
                <div className="add-product-container">
                    <p>Add My Product</p>
                    <img src={add_icon} alt="add0-icon" />
                </div>
                <img className='cart-icon' src={cart_icon} alt="cart_icon" />
                <div className="login-button">
                    <p>Login</p>
                    <img src={down_arrow_icon} alt="" />
                </div>
                <div className="signin-button">
                    <p>Sign-in</p>
                    <img src={down_arrow_icon} alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;