import React from 'react'
import CollectionItem from './collection-item'
import '../styles/style.scss'

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items.map(({ id, ...otherItemProps  }) => (
          <CollectionItem key={id} {...otherItemProps } />
        ))}
    </div>
  </div>
)

export default CollectionPreview