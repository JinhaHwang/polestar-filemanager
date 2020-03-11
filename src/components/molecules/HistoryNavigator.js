import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Field } from 'polestar-ui-kit'

const HistoryNavigator = ({
    onBack,
    onForward,
    onRefresh,
    onChange,
    onSubmit,
    path,
    trimPath,
    ...rest
}) => {
    const handleBack = useCallback(
        e => {
            if (rest.historyBack) rest.historyBack()
            if (onBack) onBack(e)
            console.log('handleBack', rest)
        },
        [],
    )

    const handleForward = useCallback(
        e => {
            if (rest.historyForward) rest.historyForward()
            if (onForward) onForward(e)
        },
        [],
    )

    const handleRefresh = useCallback(
        e => {
            if (onRefresh) onRefresh(e)
        },
        [],
    )

    const handleChange = useCallback(
        e => {
            const { value } = e.target
            if (rest.changePath) rest.changePath(value)
            if (onChange) onChange(value)
        },
        [],
    )

    const handleSubmit = useCallback(
        e => {
            if (path.length > 0 && trimPath.length > 0) {
                if (rest.setPath) rest.setPath(trimPath)
                if (rest.explorePath) rest.explorePath(trimPath)
                if (onSubmit) onSubmit(e)
            }
        },
        [path, trimPath],
    )
    return (
        <div
            style={{
                display: 'flex',
                height: 32,
                marginBottom: 3,
            }}
        >
            <div>
                <Button icon="arrow-left" onClick={handleBack} size="large" />
                <Button
                    icon="arrow-right"
                    onClick={handleForward}
                    size="large"
                />
                <Button icon="arrow-up" onClick={handleForward} size="large" />
                <Button icon="refresh" onClick={handleRefresh} size="large" />
            </div>
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
    trimPath: PropTypes.string,
}
HistoryNavigator.defaultProps = {
    onBack: null,
    onForward: null,
    onRefresh: null,
    onChange: null,
    onSubmit: null,
    path: '',
    trimPath: '',
}

export default HistoryNavigator
