// function Test(options){
//     var _data = options.data()
//     var _this = this;
//
//     for( const key in _data){
//         Object.defineProperty(_this,key,{
//             set(val){
//                 _data[key] = val
//             },
//             get(){
//                 return _data[key]
//             }
//         })
//     }
//
// }
//
// var vm = new Test({
//     data(){
//         return{
//             a: 1,
//             b: 2
//         }
//     }
// })
// vm.a = 5
//
// console.log(vm)

// const logMap = {
//     dog(){
//         console.log('hehe ')
//     }
// }
// logMap.dog()