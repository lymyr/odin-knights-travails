class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Moves {
    constructor(startingMove) {
        this.head = new Node(startingMove)
        this.list = []
    }

    add(startingMove, nextMove) {
        let temp = this.head
        while (temp.next != null) {
            if (temp.next.includes(startingMove)) {
                
            }
        }
        temp.next = new Node(nextMove)
    }

    show() {
        const arr = []
        let temp = this.head
        while(temp != null) {
            arr.push(temp.value)
        }
        return arr
    }
}

function hasVisited(move, visitedList=[]) {
    for (let i = 0; i < visitedList.length; i++) {
        if (move[0] == visitedList[i][0] && move[1] == visitedList[i][1])
            return true
    }
    return false
}

function getPossibleMoves(coords, visited=[]) {
    const gallop = [2, -2]
    const stop = [1, -1]
    const nextMoves = []
    
    gallop.forEach(x => {
        const rowGallop = x + coords[0]
        if (rowGallop < 8 && rowGallop >= 0) {
            stop.forEach(y => {
                const rowStop = y + coords[1]
                const moveCoords = [rowGallop, rowStop]
                if (rowStop < 8 && rowStop >= 0)
                    nextMoves.push(moveCoords)
            })
        }
        
        const colGallop = x + coords[1]
        if (colGallop < 8 && colGallop >= 0) {
            stop.forEach(y => {
                const colStop = y + coords[0]
                const moveCoords = [colStop, colGallop]
                if (colStop < 8 && colStop >= 0)
                    nextMoves.push(moveCoords)
            })
        }
    })
    if (nextMoves.length > 0)
        return nextMoves
    else return
}

function knightMoves(start, end, toVisit=[], visited=[], jumps=[]) {
    visited.push(start)
    if (start[0] == end[0] && start[1] == end[1]) {
        // for (let i = 0; i < visited.length; i++) {
        //     for (let j = 0; j < getPossibleMoves(visited[i]).length; j++)
        //         i += 1
        //     jumps+=1
        // }
        // console.log(jumps)
        return visited
    }

    const moves = getPossibleMoves(start, visited)
    if (moves != undefined) {
        moves.forEach(move => {
            if (!hasVisited(move, visited)) {

                toVisit.push([move[0], move[1], `from ${start} `])
            }
        })
        
    }

    const nextMove = toVisit.shift()

    return knightMoves(nextMove, end, toVisit, visited, jumps)
}

// let a = knightMoves([0,0], [2, 1])
// console.log(a)
// console.log("length:", a.length)

// a = knightMoves([0,0], [0, 2])
// console.log(a)
// console.log("length:", a.length)

a = knightMoves([0,0], [1, 0])
console.log(a)
console.log("length:", a.length)