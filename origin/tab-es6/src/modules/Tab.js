import '../scss/Tab.scss'
import nav from '../component/tab/nav/index'
import page from '../component/tab/page/index'
import docData from '../data/doctorData'
export default class Tab {

    constructor() {
        this.oTab = document.createElement('div')
        this.oTab.className = 'tabs J_tab'
        this.curIndex = 0
        this.init()
    }

    init() {
        this.render()
        this.bindEvent()
    }

    render() {
        this.oTab.appendChild(nav().tpl(docData.navData))
        this.oTab.appendChild(page().tpl(docData.pageData))
    }

    bindEvent(){
        this.tab = this.oTab.getElementsByClassName('tab')[0]
        this.oTabItem =  this.oTab.getElementsByClassName('tab-item')
        this.oPageItem =  this.oTab.getElementsByClassName('page-item')
        this.tab.addEventListener('click', this.clickItem.bind(this),false)
    }
    clickItem(e){
        const className = e.target.className
        if(className === 'tab-item'){
            this.setCurrent('remove')
            this.curIndex = [].indexOf.call(this.oTabItem, e.target)
            this.setCurrent('add')
        }
        console.log(this.curIndex)
    }
    setCurrent(field){
        console.log( this.oTabItem)
        switch (field) {
            case 'add':
                this.oTabItem[this.curIndex].className = 'tab-item current'
                this.oPageItem[this.curIndex].className = 'page-item current'
                break;
            case 'remove':
                this.oTabItem[this.curIndex].className = 'tab-item'
                this.oPageItem[this.curIndex].className = 'page-item'
                break;
            default:
                break;
        }
    }
}
