import React from 'react'
import ReactDOM from 'react-dom'
import { storiesOf, action } from '@kadira/storybook'
import  SemanticUIReactTags from '../SemanticUIReactTags' 

storiesOf('SemanticUIReactTags', module)
.add('Default', () => {
  return(getTags())
})

function getTags(tags) {
  return (
    <SemanticUIReactTags />
  )
}