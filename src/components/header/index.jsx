import { CartIcon, LogoIcon, SearchIcon, UserIcon } from '../../assets/icons'
import { Link, useLocation } from 'react-router-dom'
import { category } from '../../utils/routes'
import Categories from '../categories/Categories'

function Header({ setModalOpen }) {
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
            </div>
            <div className="header-logo">
              <Link to='/'>
                <LogoIcon />
              </Link>
            </div>
            <div className="header-buttons">
              <button className='header-button'><SearchIcon /></button>
              <button className='header-button'><UserIcon /></button>
              <button onClick={() => setModalOpen(true)} className='header-button'><CartIcon /></button>
            </div>
          </div>
        </div>
      </header >
      <Categories />

    </>
  )
}

export default Header