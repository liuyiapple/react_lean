/**
 *
 * @param {string} num1
 * @param {string} num2
 * @returns number
 */
// 中断
function getTotalPicNum(user1, user2) {
  const num1 = getPicNum(user1) // 执行中断
  const num2 = getPicNum(user2) // 继续执行
  return num1 + num2 // 返回
}


// 异步可中断
function getPicNum(name) {
    const picName = perform name;
    return picName
}

// 执行栈方法
function run() {
    try {
        getTotalPicNum('zhangsan', 'lisi')
    } handle(who) {
        switch(who) {
            case "zhangsan":
                resume with 123;
            case "zhangsan":
                resume with 123;
            default: 
                resume with 0;    
        }
    }
}
