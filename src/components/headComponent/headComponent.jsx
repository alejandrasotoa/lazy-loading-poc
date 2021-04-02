import React, { Fragment } from 'react';
import dinamycWrapper from '../../utilities/dinamycWrapper';

const HeadComponent = () => {
    const DinamycComponent = dinamycWrapper("components/headComponent/", "headComponent")
    return (
        <Fragment>
            <DinamycComponent />
        </Fragment>
  );
};



export default HeadComponent;
