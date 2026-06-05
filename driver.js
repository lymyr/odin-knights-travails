import knightMoves from "./knight.js";

function print(arr) {
    let output = ""
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1)
            output +=  String.fromCharCode(arr[i][1] + 97) + (arr[i][0] + 1)
        else
            output += `${String.fromCharCode(arr[i][1] + 97) + (arr[i][0] + 1)} -> `
    }
    console.log(output)
}

print(knightMoves([0,0], [2, 1]))
print(knightMoves([0,0], [0, 2]))
print(knightMoves([0,0], [1, 0]))
print(knightMoves([0,0], [3, 3]))
print(knightMoves([0, 0], [7, 7]))