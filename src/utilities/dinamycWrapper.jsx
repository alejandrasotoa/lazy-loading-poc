
import React, { Suspense, lazy } from 'react'
const country = localStorage.getItem('language') || 'es';

const dinamycWrapper = (path, name) => {
    return class AsyncComp extends React.Component{
        render() {
            const rute = `${path}${name}`;
            const Component = lazy(() => {
                return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then( () => {
                    switch (country) {
                        case 'es':
                        return import(/* webpackChunkName: 'es' , webpackMode: "lazy-once" */'../' + rute + '.es');
                        case 'ar':
                        return import(/* webpackChunkName: 'ar' , webpackMode: "lazy-once" */'../' + rute + '.ar');
                        default:
                        return import(/* webpackChunkName: 'es' , webpackMode: "lazy-once" */'../' + rute + '.es');
                }});
              });
                return (
                    <Suspense fallback={<p>Cargando...</p>}>
                        <Component />
                    </Suspense>
                )
        }
    }
}

export default dinamycWrapper;