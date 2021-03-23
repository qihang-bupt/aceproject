var initToolsModule = (function () {
    getTarget = function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement
        return target
    }
    replaceTpl = function (oTpl, replaceObj) {
        return oTpl.replace(/{{(.*?)}}/g, function (node, key) {
            return replaceObj[key]
        })
    }

    return {
        getTarget: getTarget,
        replaceTpl: replaceTpl
    }
})()