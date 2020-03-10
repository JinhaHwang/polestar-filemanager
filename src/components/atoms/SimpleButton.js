import React from 'react'
import PropTypes from 'prop-types'

const SimpleButton = props => {
    const { onClick, label } = props
    return (
        <div>
            <button type="button" onClick={onClick}>
                {label}
            </button>
        </div>
    )
}

SimpleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
}

SimpleButton.defaultProps = {
    label: '',
}

export default SimpleButton
