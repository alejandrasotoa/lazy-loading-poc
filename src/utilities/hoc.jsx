

import React, { Suspense, lazy } from 'react'
const country = localStorage.getItem('language') || 'es';

const hoc = () => {
            const rute = `loneFunction`;
            const funcion = (() => {
                return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then( () => {
                        return import(/* webpackChunkName: 'MainController_es' , webpackMode: "lazy-once" */'./' + rute);
                }
                )});
                return funcion;
        }

export default hoc;