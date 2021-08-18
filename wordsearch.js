const wordSearch = (letters, word) => { 
if((!word) || (letters.length === -1)) {
        return false;
    }

    if (!flatten(letters,word)) {
        if(!flatten(transpose(letters),word)){
            return false
        } 
    }
    return true;
};

const flatten = function(matrix, word) {
    const horizontalJoin = matrix.map(ls => ls.join(''))
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

const transpose = function(matrix) {

    let newMatrix = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      newMatrix[i] = [];
    }
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newMatrix[j][i] = matrix[i][j];
      }
    }
    return newMatrix;
  };

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')

module.exports = wordSearch;