;(function(doc,tools) {

    var Tab = function(option){
        this.oTab = doc.querySelector(option.el)
        this.oNav = doc.createElement('div')
        this.oNav.className = 'tab'
        this.oPage = doc.createElement('div')
        this.oPage.className = 'page'
        this.doctorData = doc.getElementById('J_doctorData').innerHTML
        this.curIndex = 0
        this.htmlCache = {}
    }
    Tab.prototype.render = function() {
        var oFragment = doc.createDocumentFragment()
        var list = this.renderList(this.doctorData)
        this.oNav.innerHTML = list.navList
        this.oPage.innerHTML = list.pageList
        oFragment.appendChild(this.oNav)
        oFragment.appendChild(this.oPage)
        this.oTab.appendChild(oFragment)
    }

    Tab.prototype.renderList = function(data){
        var navList = '',
            pageList = ''
        var navItem = doc.getElementById('navItem').innerHTML
        var pageItem = doc.getElementById('pageItem').innerHTML
        var navData = JSON.parse(data || '{}').navData
        var pageData = JSON.parse(data || '{}').pageData

        navData.forEach(function (item, index) {
            navList += tools.replaceTpl(navItem, {
                navClass: !index ? 'tab-item current' : 'tab-item',
                nav: item
            })
        })

        pageData.forEach(function (item, index) {
            pageList += tools.replaceTpl(pageItem, {
                pageClass: !index ? 'page-item current' : 'page-item',
                name: item.name,
                doctorGoodAt: item.doctorGoodAt,
                doctorHeadPic: item.doctorHeadPic
            })
        })

        return {
            navList: navList,
            pageList: pageList,
        }
    }

    Tab.prototype.bindEvent = function(){
        this.oNav.addEventListener('click', this.clickNav.bind(this), false)
    }
    Tab.prototype.clickNav = function (e) {
        var target = tools.getTarget(e)
        var className = target.className
        this.oTabItem = doc.getElementsByClassName('tab-item')
        this.oPageItem = doc.getElementsByClassName('page-item')
        className === 'tab-item' &&  this.changePage(target)
    }
    Tab.prototype.changePage = function (target) {
        this.setCurrent('remove')
        this.curIndex = [].indexOf.call(this.oTabItem, target)
        this.setCurrent('add')

        if(!this.htmlCache[this.curIndex]){
            this.htmlCache[this.curIndex] = this.oPageItem[this.curIndex].innerHTML
        }
        this.oPageItem[this.curIndex].innerHTML = this.htmlCache[this.curIndex]

    }

    Tab.prototype.setCurrent = function(field){
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

    Tab.prototype.init = function () {
        this.render()
        this.bindEvent()
    }

    window.Tab = Tab

})(document, initToolsModule);