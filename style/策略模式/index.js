const per = {
    name: '小美',
    age: 24,
    fakeAvatar: 'yyyy',
    avatar: 'aaaa',
}

const baseInfo = ['age', 'name']
const privateInfo = ['avatar', 'phone']

const user = {
    isValidated: true,
    isVIP: true,
}

const proxyDemo = new Proxy(per, {
    get(girl, key) {
        console.log('aaaa:::',key)
        if(baseInfo.indexOf(key)!==-1 && !user.isValidated) {
            console.log('您还没有完成验证哦')
            return
        }
        if(user.isValidated && privateInfo.indexOf(key) && !user.isVIP) {
            console.log('只有才可以查看该信息')
            return
        }
        return girl[key]
    },
    set(per,key,val){
        per[key] = val
    }
})
proxyDemo.age = 4
console.log('qihang::',proxyDemo.age)








