import Nav from './index.tpl'
import './index.scss'
export default ()=>{
    return {
        name: 'nav',
        tpl: (data) => {
            let oNav = document.createElement('div')
            oNav.className = 'tab'
            let list = ''
            data.forEach((item, index) => {
                list += Nav().replace(/{{(.*?)}}/g, function (node, key) {
                    return {
                        navClass: !index ? 'tab-item current' : 'tab-item',
                        navName: item
                    }[key]
                })
            })
            oNav.innerHTML = list
            return oNav
        }

    }
}