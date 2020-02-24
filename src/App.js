import React from 'react'
import './App.less'
import DirectoryTree from 'components/DirectoryTree'

function App() {
    return (
        <div className="App">
            <DirectoryTree
                items={[
                    { title: 'Expand to load', key: '0-1' },
                    {
                        title: 'Expand to load',
                        key: '0-2',
                        children: [
                            {
                                key: '0-2-1',
                                title: 'hello',
                                isLeaf: true,
                            },
                        ],
                    },
                    { title: 'Tree Node', isLeaf: true, key: '0-3' },
                ]}
            />
        </div>
    )
}

export default App
