module.exports = function towelSort (matrix) {

    if(matrix === undefined || matrix.length===0){
        return [];
    } else {
        for(let i=1;i<matrix.length;i++) {
            if(i%2!==0) {
                matrix[i] = matrix[i].reverse();
            }
        }
        return [].concat(...matrix);
    }
}
