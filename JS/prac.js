/*function aa() {
    console.log("first");
}
aa();

(function(){
    console.log("Second");
})();

() => {
    console.log("Third");
}

let a = new Function(`console.log("Fourth")`);
a();
function pa() {
    console.log("first");
}
setTimeout(pa,4000);

console.log("World");

*/

/*function rollNumber(num) {
    console.log("Roll number is: ",num)
}
setTimeout(rollNumber,3000,2300321539003);
setTimeout(rollNumber,4000,2300321539009);
*/

/*
function rollNumber(num,delay,nextroll) {
    setTimeout(() => {
        console.log("Roll Number is:",num);
        if(nextroll) nextroll();
    },delay);
}
rollNumber(1233,1000, () => {
    rollNumber(3456,2000, () => {
        rollNumber(6732,3000, () => {
            rollNumber(4563,4000);
        });
    });
});
*/

/*
    ====================Promise====================
*/

const promise = new Promise((resolve, reject) => {
    console.log("first");
    resolve("Promise Resolve");
    reject("Promise Rejected");
});
promise.then(() => {
    console.log("This is my Promise");
}).catch(() => {
    console.log("This is my Error page")
})