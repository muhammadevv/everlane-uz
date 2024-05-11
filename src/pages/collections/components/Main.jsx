import { Link } from "react-router-dom";

function Main({ collections, products, title }) {

  return (
    <main className='collections-main'>
      <div className="main-head">
        <h1 className='main-head__title'>
          Men's {title}
        </h1>
      </div>
      <div className="main-products">
        {
          products.list.map(item => (
            <div className="main-product" key={item.id}>
              <div className="main-product__image">
                <Link to={`/product/${item.slug}`}>
                  <img src={item.list.image} alt={item.title} />
                </Link>
                <button className="main-product__cart">Quick add</button>
              </div>


              <div className="main-product__content">
                <div className="main-product__text">
                  <div className="main-product__row">
                    <h3 className='main-product__title'>{item.title}</h3>
                    <p className='main-product__price'>${item.price}</p>
                  </div>
                  <p className='main-product__subtitle'>{item.list.color}</p>
                </div>
                <div className="main-product__buttons">
                  {
                    item.colors?.map((color, i) => (
                      <button key={i} className={`main-product__button ${color.toLowerCase()}`}></button>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </main>
  )
}

export default Main