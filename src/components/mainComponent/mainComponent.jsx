import React, { Fragment } from 'react';
import HeadComponent from '../headComponent/headComponent';
import LazyComponent from '../lazyComponents/lazyComponent'


const MainComponent = () => {
    return (
    <Fragment>
        <HeadComponent />
        <LazyComponent />
    </Fragment>
    )
}

export default MainComponent;