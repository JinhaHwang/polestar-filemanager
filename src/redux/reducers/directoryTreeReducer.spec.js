import { handleActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'
import { syncActions } from 'redux/actions'

test('hello', () => {
    // toBe 매쳐는 primitive 비교
    expect('hello').toBe('hello')
})

test('selectTreeNode action test', () => {
    expect(syncActions.selectTreeNode()).toEqual({ type: 'SELECT_TREE_NODE' })
    expect(syncActions.selectTreeNode('0-1')).toEqual({ type: 'SELECT_TREE_NODE', payload: '0-1' })
})

test('reducer call returns new state', () => {
    const reducer = handleActions(
        {
            [syncActions.selectTreeNode]: (state, action) => {
                return state.set('selectedNode', fromJS(action.payload))
            },
            [syncActions.setPath]: (state, action) => {
                return state.set('path', fromJS(action.payload))
            },
        },
        Map({}),
    )
    expect(reducer(undefined, syncActions.selectTreeNode('0-1'))).toEqual(Map({ selectedNode: '0-1' }))

    const newState = reducer(undefined, syncActions.selectTreeNode('0-1'))
    expect(reducer(newState, syncActions.setPath('0-1'))).toEqual(Map({ selectedNode: '0-1', path: '0-1' }))
})
