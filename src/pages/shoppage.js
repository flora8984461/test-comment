import React from 'react';
import SHOP_DATA from './shopdata.js';
import CollectionPreview from '../components/collection-preview';

class HatsShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-pgae'>
                {/* { collections
                .map( ({id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} { ...otherCollectionProps } />
                ) ) } */}

                {collections.map(({ id, ...otherCollectionProps }) => {
                    if(id=='1'){
                        return (<CollectionPreview key={id} { ...otherCollectionProps } />)
                    }
                })}
            
            </div>
        )
    }
}

export default HatsShopPage;