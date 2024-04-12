/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            // https://uicolors.app/create
            colors: {
                "danger": {
                    DEFAULT: '#E0234C',
                    '50': '#fff1f2',
                    '100': '#ffe4e6',
                    '200': '#fdced3',
                    '300': '#fca5b0',
                    '400': '#f97386',
                    '500': '#f2415f',
                    '600': '#e0234c',
                    '700': '#bc143d',
                    '800': '#9d143a',
                    '900': '#871438',
                    '950': '#4b0619',
                }, "gray": {
                    DEFAULT: '#8E95A0',
                    '50': '#f8f9fa',
                    '100': '#f2f3f5',
                    '200': '#e8eaec',
                    '300': '#d5d9dd',
                    '400': '#bdc2c8',
                    '500': '#a1a8b1',
                    '600': '#8e95a0',
                    '700': '#777e8a',
                    '800': '#646973',
                    '900': '#53575f',
                    '950': '#363a3f',
                }, "info": {
                    DEFAULT: '#1158DB',
                    '50': '#eef8ff',
                    '100': '#d9edff',
                    '200': '#bbe1ff',
                    '300': '#8dcfff',
                    '400': '#57b3ff',
                    '500': '#3092ff',
                    '600': '#1973f7',
                    '700': '#1158db',
                    '800': '#154ab8',
                    '900': '#174291',
                    '950': '#132958',
                }, "primary": {
                    DEFAULT: '#3F5582',
                    '50': '#f5f6fa',
                    '100': '#eaedf4',
                    '200': '#d0d7e7',
                    '300': '#a6b5d3',
                    '400': '#768eba',
                    '500': '#5570a2',
                    '600': '#3f5582',
                    '700': '#36476e',
                    '800': '#303e5c',
                    '900': '#2c374e',
                    '950': '#1d2334',
                }, "secondary": {
                    DEFAULT: '#3A819B',
                    '50': '#f1f9fa',
                    '100': '#dbedf2',
                    '200': '#bcdce5',
                    '300': '#8dc2d3',
                    '400': '#57a0b9',
                    '500': '#3a819b',
                    '600': '#346c86',
                    '700': '#30596e',
                    '800': '#2e4b5c',
                    '900': '#2a404f',
                    '950': '#182934',
                }, "success": {
                    DEFAULT: '#10994E',
                    '50': '#f0fdf5',
                    '100': '#dbfdea',
                    '200': '#b9f9d4',
                    '300': '#83f2b4',
                    '400': '#45e38c',
                    '500': '#1dca6b',
                    '600': '#10994e',
                    '700': '#128345',
                    '800': '#13683a',
                    '900': '#125533',
                    '950': '#042f1a',
                }, "warning": {
                    DEFAULT: '#EE8434',
                    '50': '#fef7ee',
                    '100': '#fdeed7',
                    '200': '#f9d9af',
                    '300': '#f5bc7c',
                    '400': '#f19646',
                    '500': '#ee8434',
                    '600': '#de6018',
                    '700': '#b84816',
                    '800': '#933a19',
                    '900': '#763218',
                    '950': '#40170a',
                }

            },
        }
    },
    plugins: [],
}