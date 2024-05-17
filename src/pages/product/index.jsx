import React, { useEffect } from 'react'
import { BoxIcon, CarIcon, GiftIcon } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { productGet } from '../../store/actions/productActions'
import { Link, useParams } from 'react-router-dom'
import { addCart } from '../../store/slices/cart'
function ProductPage() {
  const { product } = useSelector(state => state.product)
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(productGet(id))
  }, [id])


  const handleAddCart = (product) => {
    dispatch(addCart(product))
  }

  return (
    <div className='product'>
      <div className="container">
        <div className="product-wrapper">
          <div className="product-images">
            {
              product.images?.map((img, i) => (
                <div key={i} className="product-images__img">
                  <img src={img} alt={product?.title} />
                </div>
              ))
            }
          </div>
          <div className="product-content">
            <div className="product-content__head">
              <div className="product-content__row">
                <h3 className='product-head__title'>{product.title}</h3>
                <p className='product-head__title'>${product.price}</p>
              </div>
              <p><span>⭐⭐⭐⭐⭐</span>({product.review}) review </p>
            </div>
            <div className="product-content__content">
              <div className="product-content__col">
                <p className='product-content__title'>Color <span>{product.color}</span></p>
                <div className="product-content__color">
                  {
                    product.colors?.map((color, i) => (
                      <Link key={i} to={`/product/${product.slug?.split('-')?.slice(0, -1)?.join('-')}-${color.toLowerCase().slice('').split(' ').join('-')}`}>
                        <button key={i} className={`product-content__color_button ${color.toLowerCase()}`}></button>
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className="product-content__col">
                <p className='product-content__title'>Size</p>
                <div className='product-content__size'>
                  {
                    product.sizes?.map((size, i) => (
                      <button key={i} className='product-content__size_button'>{size}</button>
                    ))
                  }
                </div>
              </div>
              <div className='product-content__button'>
                <button onClick={() => handleAddCart(product)} className='product-content__button_add'>ADD to BAG</button>
              </div>
            </div>
            <div className="product-content__info">
              <div className="product-info__item">
                <CarIcon />
                <div className="product-info__text">
                  <h4 className='product-info__title'>Shipping Discount</h4>
                  <p className='product-info__subtitle'>Reduced rate express shipping on orders over undefined.</p>
                </div>
              </div>
              <div className="product-info__item">
                <BoxIcon />
                <div className="product-info__text">
                  <h4 className='product-info__title'>Easy Returns</h4>
                  <p className='product-info__subtitle'>null Duties & taxes are non-refundable.</p>
                </div>
              </div>
              <div className="product-info__item">
                <GiftIcon />
                <div className="product-info__text">
                  <h4 className='product-info__title'>Send It As A Gift</h4>
                  <p className='product-info__subtitle'>Add a free personalized note during checkout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductPage