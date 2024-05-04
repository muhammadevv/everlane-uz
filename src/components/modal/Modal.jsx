
function Modal({ modalOpen, setModalOpen }) {
  return (
    <div className={`modal ${modalOpen && 'active'}`}>
      <div onClick={() => setModalOpen(false)} className="modal-bg"></div>
      <div className={`modal-content ${modalOpen && 'active'}`}>
        <div className="modal-head"></div>
        <div className="modal-body"></div>
        <div className="modal-footer"></div>
      </div>
    </div>
  )
}

export default Modal