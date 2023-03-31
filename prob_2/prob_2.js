class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.elements = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
    }
    getRows() {
        return this.rows;
    }
    getCols() {
        return this.cols;
    }
    setElement(row, col, value) {
        if (row < this.rows && col < this.cols) {
            this.elements[row][col] = value;
        }
    }
    add(matrix) {
        if (this.rows !== matrix.getRows() || this.cols !== matrix.getCols()) { //if the matrices cannot be added logs NOOP
            console.log('NOOP');
        }
        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.setElement(i, j, this.elements[i][j] + matrix.elements[i][j]);
            }
        }
        return result;
    }
    multiply(matrix) {
        if (this.cols !== matrix.getRows()) {
            console.log('NOOP');
        }
        const result = new Matrix(this.rows, matrix.getCols());
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < matrix.getCols(); j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.elements[i][k] * matrix.elements[k][j];
                }
                result.setElement(i, j, sum);
            }
        }
        return result; //returns the result of the operation
    }
}
