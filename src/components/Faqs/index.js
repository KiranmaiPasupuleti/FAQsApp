// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>

          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} eachFaq={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
