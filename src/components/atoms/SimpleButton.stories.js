import React from 'react'
import base from 'paths.macro'
import SimpleButton from './SimpleButton'

export default {
    component: SimpleButton,
    title: `${base}DirectoryTree`,
}

export const simpleButtonTest = () => <SimpleButton onClick={() => {}} />
export const simpleButtonTest2 = () => (
    <SimpleButton onClick={() => {}} label="hello" />
)
