import Moves from "./moves.js"

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

function knightMoves(start, end, toVisit=[], visited=[], chronoMoves=null, initial=true) {
    if (initial)
        chronoMoves = new Moves(start)

    visited.push(start)

    if (start[0] == end[0] && start[1] == end[1]) {
        return chronoMoves.show()
    }

    const moves = getPossibleMoves(start, visited)
    if (moves != undefined) {

        moves.forEach(move => {
            if (!hasVisited(move, visited)) {
                toVisit.push([move[0], move[1]])
            }
        })
        
    }

    const nextMove = toVisit.shift()
    chronoMoves.add(start, nextMove)

    return knightMoves(nextMove, end, toVisit, visited, chronoMoves, false)
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