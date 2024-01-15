import {Component} from 'react'

import './index.css'

class EditText extends Component {
  state = {editText: '', isButtonClicked: false}

  onChangeText = event => {
    this.setState({editText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {editText, isButtonClicked} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'
    return (
      <div className="app-container">
        <div className="edit-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isButtonClicked ? (
              <p className="paragraph">{editText}</p>
            ) : (
              <input
                type="text"
                value={editText}
                className="input-field"
                onChange={this.onChangeText}
              />
            )}
            <button
              className="edit-button"
              type="button"
              onClick={this.onClickButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditText
