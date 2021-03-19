// class Tool {
//     constructor(name) {
//         this.name = name
//         this.queue = [];
//         let fn = () => {
//             console.log(`Hi! This is ${name}`);
//             this.next();
//         }
//         this.queue.push(fn)
//         setTimeout(() => {
//             this.next();
//         }, 0);
//
//
//     }
//     next(){
//         let fn = this.queue.shift()
//         fn && fn();
//     }
//     action(e){
//         let fn = () => {
//                 console.log(`---do ${e}`)
//                 this.next();
//         }
//         this.queue.push(fn)
//         return this;
//     }
//     sleepFn(second,first){
//         let fn = () => {
//             setTimeout(() => {
//                 console.log(`--sleep ${second}s`)
//                 this.next();
//             },second*1000)
//         }
//         if(first){
//             this.queue.unshift(fn)
//         }else{
//             this.queue.push(fn)
//         }
//     }
//     sleep(second){
//         this.sleepFn(second,false)
//         return this;
//     }
//     sleepFirst(second){
//         this.sleepFn(second,true)
//         return this;
//     }
// }
//
// let t  = new Tool('kimi').sleep(2).action('jkl')

// console.log(/(https?:)?\/\//.test('//ssdsd.com.jd'))
// if(/(https?:)?\/\//.test('//ssdsd.com.jd')){
//     url.replace(/(https?:)?\/\//i, '//')
// }







