class Matrix {//Making the principal class
    private rows: number;//making this propierty private
    private cols: number;//making this propierty private
    private elements: number[][];//making this propierty private
  
    constructor(rows: number, cols: number) {//creating the constructor
      this.rows = rows;
      this.cols = cols;
      this.elements = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
    }
  
    getRows(): number {//method to get the rows
      return this.rows;
    }
  
    getCols(): number {//method to get the columns
      return this.cols;
    }
  
    setElement(row: number, col: number, value: number): void {//the setter of elements
      if (row < this.rows && col < this.cols) {
        this.elements[row][col] = value;
      }
    }
  
    add(matrix: Matrix): Matrix {//an adder for the matrix
      if (this.rows !== matrix.getRows() || this.cols !== matrix.getCols()) {//if the matrices cannot be added logs NOOP
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
  
    multiply(matrix: Matrix): Matrix {//function to multiply the matrixs
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
  
      return result;//returns the result of the operation
    }
  }
  