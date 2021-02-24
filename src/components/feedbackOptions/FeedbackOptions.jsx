import PropTypes from 'prop-types'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(option => {
            return <button type='button' key={option} onClick={onLeaveFeedback}>{option}</button>
        })
    
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;