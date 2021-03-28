import Tab from '../modules/Tab'
    ;(function (doc) {

    const app = doc.getElementById('app')
    const init = () => {
        const tab = new Tab()
        app.appendChild(tab.oTab)
    }
    init()

})(document);