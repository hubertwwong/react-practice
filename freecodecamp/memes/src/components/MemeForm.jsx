import React from 'react';

function MemeForm(props) {
  return (
    <form className="memeForm" onSubmit={props.onSubmit}>
      <label>
        Top:
        <input type="text" name="topText" value={props.data.topText} onChange={props.onChange}/>
        <br/>
      </label>
      <label>
        Bottom:
        <input type="text" name="bottomText" value={props.data.bottomText} onChange={props.onChange}/>
        <br/>
      </label>
      
      <button>Change image</button>
    </form>
  )
}

export default MemeForm;