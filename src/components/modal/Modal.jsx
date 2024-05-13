import { useDispatch, useSelector } from "react-redux"
import { CloseIcon, DeleteIcon } from "../../assets/icons"
import { decrement, increment, removeCart } from "../../store/slices/cart"

function Modal({ modalOpen, setModalOpen }) {
  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeCart(id))
  }

  const handleIncrement = (id) => {
    dispatch(increment(id))
  }

  const handleDecrement = (id) => {
    dispatch(decrement(id))
  }

  return (
    <div className={`modal ${modalOpen && 'active'}`}>
      <div onClick={() => setModalOpen(false)} className="modal-bg"></div>
      <div className={`modal-content ${modalOpen && 'active'}`}>
        <button onClick={() => setModalOpen(false)} className="modal-close"><CloseIcon /></button>
        <div className="modal-head">
          <h2 className="modal-head__title"> Your Cart</h2>
        </div>
        <div className="modal-body">
          {
            items.map((item, i) => (
              <div key={i} className="modal-product">
                <div className="modal-product__image">
                  <img src={item?.list?.image} alt={item.title} />
                </div>
                <div className="modal-product__content">
                  <div className="modal-product__row">
                    <div className="modal-product__text">
                      <h5 className="modal-product__title">{item.title}</h5>
                      <p className="modal-product__subtitle">{`${item?.list?.size} | ${item?.list?.color}`}</p>
                    </div>
                    <button onClick={() => handleDelete(item.id)} className="modal-product__button">
                      <DeleteIcon />
                    </button>
                  </div>
                  <div className="modal-product__row">
                    <p className="modal-product__price">$263</p>
                    <div className="counter">
                      <button onClick={() => handleDecrement(item.id)} className="counter-button">-</button>
                      <span className="counter-text">{item.qty}</span>
                      <button onClick={() => handleIncrement(item.id)} className="counter-button">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
        <div className="modal-footer">
          <div className="modal-footer__row">
            <p className="modal-footer__price">Subtotal<span className="modal-footer__price__span"> (2 items)</span></p>
            <p className="modal-footer__price">$123</p>
          </div>
          <button className="modal-footer__button">ceackout</button>
          <p className="modal-footer__text">Psst, get it now before it sells out.</p>
        </div>
      </div>
    </div>
  )
}

export default Modal