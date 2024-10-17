/* .jgdxvjgldfjv j dshjhfcldsjfjxladsjfx sdfijsd fllsdij*/

function getRoll(num,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Roll No. is:",num);
            resolve("Successfully Done");
        }, delay);
    });
}

getRoll(1233,1000).then(() => {
    getRoll(3456,2000).then(() => {
        getRoll(6732,3000).then(() => {
            getRoll(4563,4000);
        });
    });
});