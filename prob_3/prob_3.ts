class Pizza {//setting the class named Pizza
    private _size: string; //naming a private propierty of the class
    private _extraCheese: boolean;//naming a private propierty of the class
    private _pepperoniToppings: number;//naming a private propierty of the class
    private _hamToppings: number;//naming a private propierty of the class
    private _pineappleToppings: number;//naming a private propierty of the class
  
    constructor(
      //setting the types of every propierty
      size: string,
      extraCheese: boolean,
      pepperoniToppings: number,
      hamToppings: number,
      pineappleToppings: number

    ) {
      //setting the values for the class
      this._size = size;
      this._extraCheese = extraCheese;
      this._pepperoniToppings = pepperoniToppings;
      this._hamToppings = hamToppings;
      this._pineappleToppings = pineappleToppings;
    }
  
    public get size(): string {//getter fot the size
      return this._size;
    }
  
    public set size(size: string) {//setter for the size
      this._size = size;
    }
  
    public get extraCheese(): boolean {//getter for extra cheese
      return this._extraCheese;
    }
  
    public set extraCheese(extraCheese: boolean) {//setter for extra cheese
      this._extraCheese = extraCheese;
    }
  
    public get pepperoniToppings(): number {//getter for pepperoni
      return this._pepperoniToppings;
    }
  
    public set pepperoniToppings(pepperoniToppings: number) {//setter for pepperoni
      this._pepperoniToppings = pepperoniToppings;
    }
  
    public get hamToppings(): number {//getter for ham
      return this._hamToppings;
    }
  
    public set hamToppings(hamToppings: number) {//setter for ham
      this._hamToppings = hamToppings;
    }
  
    public get pineappleToppings(): number {//getter for pineapple
      return this._pineappleToppings;
    }
  
    public set pineappleToppings(pineappleToppings: number) {//setter for pepperoni
      this._pineappleToppings = pineappleToppings;
    }
  
    //function to calculate cost for a determined pizza
    public genCost(): number {
      let cost = 0;
  
      if (this._size === 'small') {
        cost += 10 + 2 * (this._pepperoniToppings + this._hamToppings + this._pineappleToppings);
        if (this._extraCheese) {
          cost += 2;
        }
      } else if (this._size === 'medium') {
        cost += 12 + 2 * (this._pepperoniToppings + this._hamToppings + this._pineappleToppings);
        if (this._extraCheese) {
          cost += 4;
        }
      } else if (this._size === 'large') {
        cost += 14 + 3 * (this._pepperoniToppings + this._hamToppings + this._pineappleToppings);
        if (this._extraCheese) {
          cost += 6;
        }
      } else if (this._size === 'extra-large') {
        cost += 18 + 4 * (this._pepperoniToppings + this._hamToppings + this._pineappleToppings);
        if (this._extraCheese) {
          cost += 6
        }
      }
      return cost
    }
  } 

//testing function
const pizza = new Pizza('medium', true, 1, 0, 2);

console.log(`Size: ${pizza.size}`);//medium
console.log(`Extra cheese: ${pizza.extraCheese}`);//true
console.log(`Pepperoni toppings: ${pizza.pepperoniToppings}`);//1
console.log(`Ham toppings: ${pizza.hamToppings}`);//0
console.log(`Pineapple toppings: ${pizza.pineappleToppings}`);//2

const cost = pizza.genCost();
console.log(`Cost: $${cost}`);//$22