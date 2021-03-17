
//封装队列类
function Queue() {
    //属性
    this.items = [] //基于数组实现队列

    //方法
    //1、将元素加入到队列中
    Queue.prototype.enqueue = function (element) {
        this.items.push(element)
    }

    //2、从队列中删除队首元素,并获取删除的值
    Queue.prototype.dequeue = function () {
        return this.items.shift()
    }

    //3、查看队首的元素
    Queue.prototype.front = function () {
        return this.items[0]
    }

    //4、查看队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    //5、查看队列中的元素的个数
    Queue.prototype.size = function () {
        return this.items.length
    }

    //6、toString方法
    Queue.prototype.toString = function () {
        let resultString = ""
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + " "
        }
        return resultString;
    }
}

/*let queue = new Queue()
queue.enqueue("abc")
queue.enqueue("cba")
queue.enqueue("nba")
console.log(queue)

// queue.dequeue()
console.log(queue.isEmpty())*/
