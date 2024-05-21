import { CartIcon, LogoIcon, MenuIcon, SearchIcon, UserIcon } from '../../assets/icons'
import { Link, useLocation } from 'react-router-dom'
import { category } from '../../utils/routes'
import Categories from '../categories/Categories'
import { useSelector } from 'react-redux'

function Header({ setModalOpen }) {
  const { items } = useSelector(state => state.cart)
  const location = useLocation()
  const path = location.pathname.split('').slice(0, 11).join('')
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header-row">
            <div className="header-nav">
              {
                category.map(item => (
                  <Link key={item.id} className={`header-link ${path === item.slug && 'active'}`} to={`${item.slug}`}>{item.title}</Link>
                ))
              }

              <button className='header-button__menu'>
                <MenuIcon />
              </button>
            </div>
            <div className="header-logo">
              <Link to='/'>
                <LogoIcon />
              </Link>
            </div>
            <div className="header-buttons">
              <button className='header-button'><SearchIcon /></button>
              <button className='header-button'><UserIcon /></button>
              <button onClick={() => setModalOpen(true)} className='header-button'><CartIcon />
                {
                  items.length > 0 && <span className='header-button__span'>{items.length}</span>
                }
              </button>
            </div>
          </div>
        </div>
      </header >
      <Categories />

    </>
  )
}

export default Header