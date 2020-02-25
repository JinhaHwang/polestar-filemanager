import { handleActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'
import { selectTreeNode, setPath } from '../actions'

test('hello', () => {
    // toBe 매쳐는 primitive 비교
    expect('hello').toBe('hello')
})

test('selectTreeNode action test', () => {
    expect(selectTreeNode()).toEqual({ type: 'SELECT_TREE_NODE' })
    expect(selectTreeNode('0-1')).toEqual({ type: 'SELECT_TREE_NODE', payload: '0-1' })
})

test('reducer call returns new state', () => {
    const reducer = handleActions(
        {
            [selectTreeNode]: (state, action) => {
                return state.set('selectedNode', fromJS(action.payload))
            },
            [setPath]: (state, action) => {
                return state.set('path', fromJS(action.payload))
            },
        },
        Map({}),
    )
    expect(reducer(undefined, selectTreeNode('0-1'))).toEqual(Map({ selectedNode: '0-1' }))

    const newState = reducer(undefined, selectTreeNode('0-1'))
    expect(reducer(newState, setPath('0-1'))).toEqual(Map({ selectedNode: '0-1', path: '0-1' }))
})
