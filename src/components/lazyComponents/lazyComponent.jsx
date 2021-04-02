import React, { Fragment } from 'react';
import dinamycWrapper from '../../utilities/dinamycWrapper';

const LazyComponent = () => {
    const DinamycComponent = dinamycWrapper("components/lazyComponents/", "lazyComponent")
    return (
    <Fragment>
        <DinamycComponent />
    </Fragment>
  );
};

export default LazyComponent;
