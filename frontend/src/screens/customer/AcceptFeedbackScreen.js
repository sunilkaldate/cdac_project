import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { feedback } from '../../actions/customerActions'

const AcceptFeedBackScreen = (props) => {
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState('')

  const giveFeedback = () => {
    dispatch(feedback(message, rating))
    props.history.push('/customermenu')
    //  dispatch(resetFeedback())
  }
  const feedbackHere = useSelector((store) => store.customerFeedback)
  const { loading, error, response } = feedbackHere

  const dispatch = useDispatch()

  return (
    <div>
      <div className="form ">
        <div className="mb-3">
          <label style={{ marginTop: 30 }} className="form-label">
            FeedBack
          </label>
          <input
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            className="form-control"
          ></input>
        </div>
        <label for="customRange2" class="form-label">
          Rating
        </label>
        <input
          onChange={(e) => {
            setRating(e.target.value)
          }}
          type="range"
          class="form-range"
          min="0"
          max="5"
          step="1"
          id="customRange2"
        ></input>
      </div>
      <button
        onClick={() => {
          giveFeedback()
        }}
        class="btn btn-info"
      >
        FeedBack
      </button>
    </div>
  )
}

export default AcceptFeedBackScreen
