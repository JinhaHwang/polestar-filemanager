import React from 'react'
import PropTypes from 'prop-types'
import {Button, Field} from 'polestar-ui-kit'

const HistoryNavigator = ({ onBack, onForward, onRefresh, onChange, onSubmit, path, ...rest }) => {
    const handleBack = e => {
        if (onBack) onBack(e)
    }
    const handleForward = e => {
        if (onForward) onForward(e)
    }
    const handleRefresh = e => {
        if (onRefresh) onRefresh(e)
    }
    const handleChange = e => {
        const { value } = e.target
        if (rest.changePath) rest.changePath(value)
        if (onChange) onChange(value)
    }
    const handleSubmit = e => {
        if (rest.explorePath) rest.explorePath(path)
        if (onSubmit) onSubmit(e)
    }
    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <Button icon="back" onClick={handleBack}>
                뒤로
            </Button>
            <Button icon="forward" onClick={handleForward}>
                앞으로
            </Button>
            <Button icon="handleRefresh" onClick={handleRefresh}>
                새로고침
            </Button>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Field.Input
                    defaultValue=""
                    value={path}
                    placeholder=""
                    onChange={handleChange}
                    onPressEnter={handleSubmit}
                />
            </div>
        </div>
    )
}

HistoryNavigator.propTypes = {
    onBack: PropTypes.func,
    onForward: PropTypes.func,
    onRefresh: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    path: PropTypes.string,
}
HistoryNavigator.defaultProps = {
    onBack: null,
    onForward: null,
    onRefresh: null,
    onChange: null,
    onSubmit: null,
    path: '',
}

export default HistoryNavigator
