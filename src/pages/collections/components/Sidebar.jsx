import React from 'react'

function Sidebar() {
  return (
    <div className='collections-sidebar'>
      <div className="sidebar-head"><p>100 Products</p></div>
      <div className="sidebar-content">
        <form className='collections-sidebar__category'>
        <label class="callections-sidebar__label custom-checkbox">
            <input name='dummy' type="checkbox" />
            <span class="checkmark"></span>
            <span>Knit Tops</span>
          </label>

        </form>
        <form className='collections-sidebar__color'>
          <div className="form-item">
            <input id='black' name='black' type="radio" />
            <label htmlFor="black">Black</label>
          </div>
          <div className="form-item">
            <input id='blue' name='blue' type="radio" />
            <label htmlFor="blue">Blue</label>
          </div>
          <div className="form-item">
            <input id='brown' name='brown ' type="radio" />
            <label htmlFor="brown">Brown</label>
          </div>
          <div className="form-item">
            <input id='green' name='green' type="radio" />
            <label htmlFor="green">Green</label>
          </div>
          <div className="form-item">
            <input id='grey' type="radio" />
            <label htmlFor="grey">Grey</label>
          </div>
          <div className="form-item">
            <input id='orange' name='orange' type="radio" />
            <label htmlFor="orange">Orange</label>
          </div>
          <div className="form-item">
            <input id='pink' name='pink' type="radio" />
            <label htmlFor="pink">Pink</label>
          </div>
          <div className="form-item">
            <input id='purple' name='purple' type="radio" />
            <label htmlFor="purple">Purple</label>
          </div>
          <div className="form-item">
            <input id='red' name='red' type="radio" />
            <label htmlFor="red">Red</label>
          </div>
          <div className="form-item">
            <input id='tan' name='tan' type="radio" />
            <label htmlFor="tan">Tan</label>
          </div>
          <div className="form-item">
            <input id='white' name='white' type="radio" />
            <label htmlFor="white">White</label>
          </div>
          <div className="form-item">
            <input id='yellow' name='yellow' type="radio" />
            <label htmlFor="yellow">Yellow</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sidebar