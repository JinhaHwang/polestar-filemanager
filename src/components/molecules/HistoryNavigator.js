import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Field } from 'polestar-ui-kit'
import {useDispatch, useSelector} from "react-redux"
import {ActionCreators} from "redux-undo"
import {historyNavigatorPathSelector, trimPathSelector} from "../../redux/selectors"
import {asyncActions, syncActions} from "../../redux/actions"

const HistoryNavigator = ({
    onBack,
    onForward,
    onRefresh,
    onChange,
    onSubmit,
    ...rest
}) => {
    const dispatch = useDispatch()

    const path = useSelector(state => historyNavigatorPathSelector(state))
    const trimPath = useSelector(state => trimPathSelector(state))

    const handleBack = useCallback(
        e => {
            dispatch(ActionCreators.undo())
            if (onBack) onBack(e)
        },
        [dispatch, onBack],
    )

    const handleForward = useCallback(
        e => {
            dispatch(ActionCreators.redo())
            if (onForward) onForward(e)
        },
        [dispatch, onForward],
    )

    const handleRefresh = useCallback(
        e => {
            if (onRefresh) onRefresh(e)
        },
        [onRefresh],
    )

    const handleChange = useCallback(
        e => {
            const { value } = e.target
            dispatch(syncActions.changePath(value))
            if (onChange) onChange(value)
        },
        [dispatch, onChange],
    )

    const handleSubmit = useCallback(
        e => {
            if (trimPath.length > 0) {
                dispatch(asyncActions.explorePath(trimPath))
                if (onSubmit) onSubmit(e)
            }
        },
        [dispatch, onSubmit, trimPath],
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
}
HistoryNavigator.defaultProps = {
    onBack: null,
    onForward: null,
    onRefresh: null,
    onChange: null,
    onSubmit: null,
}

export default HistoryNavigator
