class Node {
    constructor(value) {
        this.value = value
        this.nextList = []
        this.prev = null
    }
}

export default class Moves {
    constructor(startingMove) {
        this.head = new Node(startingMove)
    }

    add(prevMove, nextMove) {
        const nextNode = new Node(nextMove)
        const prevNode = this.getNode(prevMove)
        prevNode.nextList.push(nextNode)
        nextNode.prev = prevNode
    }

    showPath(lastVal) {
        const arr = []
        let temp = this.getNode(lastVal)
        arr.push(temp.value)
        while(temp.prev != null) {
            temp = temp.prev
            arr.push(temp.value)
        }
        return arr.reverse()
    }

    getNode(value, current=this.head) {
        if (value[0] == current.value[0] && value[1] == current.value[1])
            return current

        for (let i = 0; i < current.nextList.length; i++) {
            const c = current.nextList[i]
            if (value[0] == c.value[0] && value[1] == c.value[1])
                return c
            else
                return this.getNode(value, current.nextList[i])
        }
    
    }

    getNode(value, current=this.head, queue=[]) {
        if (value[0] == current.value[0] && value[1] == current.value[1])
            return current

        for (let i = 0; i < current.nextList.length; i++) {
            queue.push(current.nextList[i])
        }
        return this.getNode(value, queue.shift(), queue)
    }
}