import { CloseIcon, DeleteIcon } from "../../assets/icons"

function Modal({ modalOpen, setModalOpen }) {
  return (
    <div className={`modal ${modalOpen && 'active'}`}>
      <div onClick={() => setModalOpen(false)} className="modal-bg"></div>
      <div className={`modal-content ${modalOpen && 'active'}`}>
        <button onClick={() => setModalOpen(false)} className="modal-close"><CloseIcon /></button>
        <div className="modal-head">
          <h2>Your Cart</h2>
        </div>
        <div className="modal-body">
          <div className="modal-product">
            <div className="modal-product__image">
              <img src="/modal.avif" alt="" />
            </div>
            <div className="modal-product__content">
              <div className="modal-product__row">
                <div className="modal-product__text">
                  <h5 className="modal-product__title">The Organic Cotton Straight-Leg Jean</h5>
                  <p className="modal-product__subtitle">Size 29x30 | Salt Lake</p>
                </div>
                <button className="modal-product__button">
                  <DeleteIcon />
                </button>
              </div>
              <div className="modal-product__row">
                <p className="modal-product__price">$263</p>
                <button>- 1 +</button>
              </div>
            </div>
          </div>
          <div className="modal-product">
            <div className="modal-product__image">
              <img src="/modal.avif" alt="" />
            </div>
            <div className="modal-product__content">
              <div className="modal-product__row">
                <div className="modal-product__text">
                  <h5 className="modal-product__title">The Organic Cotton Straight-Leg Jean</h5>
                  <p className="modal-product__subtitle">Size 29x30 | Salt Lake</p>
                </div>
                <button className="modal-product__button">
                  <DeleteIcon />
                </button>
              </div>
              <div className="modal-product__row">
                <p className="modal-product__price">$263</p>
                <button>- 1 +</button>
              </div>
            </div>
          </div><div className="modal-product">
            <div className="modal-product__image">
              <img src="/modal.avif" alt="" />
            </div>
            <div className="modal-product__content">
              <div className="modal-product__row">
                <div className="modal-product__text">
                  <h5 className="modal-product__title">The Organic Cotton Straight-Leg Jean</h5>
                  <p className="modal-product__subtitle">Size 29x30 | Salt Lake</p>
                </div>
                <button className="modal-product__button">
                  <DeleteIcon />
                </button>
              </div>
              <div className="modal-product__row">
                <p className="modal-product__price">$263</p>
                <button>- 1 +</button>
              </div>
            </div>
          </div>
          <div className="modal-product">
            <div className="modal-product__image">
              <img src="/modal.avif" alt="" />
            </div>
            <div className="modal-product__content">
              <div className="modal-product__row">
                <div className="modal-product__text">
                  <h5 className="modal-product__title">The Organic Cotton Straight-Leg Jean</h5>
                  <p className="modal-product__subtitle">Size 29x30 | Salt Lake</p>
                </div>
                <button className="modal-product__button">
                  <DeleteIcon />
                </button>
              </div>
              <div className="modal-product__row">
                <p className="modal-product__price">$263</p>
                <button>- 1 +</button>
              </div>
            </div>
          </div>
          <div className="modal-product">
            <div className="modal-product__image">
              <img src="/modal.avif" alt="" />
            </div>
            <div className="modal-product__content">
              <div className="modal-product__row">
                <div className="modal-product__text">
                  <h5 className="modal-product__title">The Organic Cotton Straight-Leg Jean</h5>
                  <p className="modal-product__subtitle">Size 29x30 | Salt Lake</p>
                </div>
                <button className="modal-product__button">
                  <DeleteIcon />
                </button>
              </div>
              <div className="modal-product__row">
                <p className="modal-product__price">$263</p>
                <button>- 1 +</button>
              </div>
            </div>
          </div>
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