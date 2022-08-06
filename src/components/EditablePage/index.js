import {Component} from 'react'
import './index.css'

class EditablePage extends Component {
  state = {
    textData: '',
    status: false,
  }

  onChangeGetInput = event => {
    this.setState({textData: event.target.value})
  }

  onSave = () => {
    this.setState({status: true})
  }

  onEdit = () => {
    this.setState({status: false})
  }

  render() {
    const {textData, status} = this.state
    const inputName = status ? 'inactive' : 'active'
    const editName = status ? 'active' : 'inactive'
    return (
      <div className="bg-container">
        <div className="bg">
          <h1 className="heading">Editable Text Input</h1>
          <div className={`row ${inputName}`}>
            <input
              type="text"
              id="textArea"
              onChange={this.onChangeGetInput}
              className="input"
              value={textData}
            />
            <button type="button" className="btn" onClick={this.onSave}>
              Save
            </button>
          </div>
          <div className={`row ${editName}`}>
            <p>{textData}</p>
            <button type="button" className="btn" onClick={this.onEdit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditablePage
