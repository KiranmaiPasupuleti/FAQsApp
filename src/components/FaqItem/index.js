// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {plusMode: true}

  onclickIcon = () => {
    this.setState(prevState => ({
      plusMode: !prevState.plusMode,
    }))
  }

  renderAnswer = () => {
    const {eachFaq} = this.props
    const {answerText} = eachFaq
    const {plusMode} = this.state

    if (plusMode === false) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {eachFaq} = this.props
    const {questionText} = eachFaq
    const {plusMode} = this.state

    return (
      <li className="each-faq-container">
        <div className="question-button-container">
          <h1 className="question-el">{questionText}</h1>
          <div>
            {plusMode ? (
              <button
                className="plus-minus-styling"
                onClick={this.onclickIcon}
                type="button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                  alt="plus"
                />
              </button>
            ) : (
              <button
                className="plus-minus-styling"
                onClick={this.onclickIcon}
                type="button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                  alt="minus"
                />
              </button>
            )}
          </div>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
