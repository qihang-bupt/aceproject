import Page from './index.tpl'
import './index.scss'
export default () => {
   return {
       name:'page',
       tpl(data){
           let oPage = document.createElement('div')
           oPage.className = 'page'
           let list = ''
           data.forEach((item,index) => {
               list += Page().replace(/{{(.*?)}}/g, function (node, key) {
                   return {
                       pageClass: !index ? 'page-item current' : 'page-item',
                       name: item.name,
                       doctorGoodAt: item.doctorGoodAt,
                       doctorHeadPic: item.doctorHeadPic
                   }[key]
               })
           })
           oPage.innerHTML = list
           return oPage
       }
   }
}