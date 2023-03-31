class Pizza {
    private _size: string;
    private _extraCheese: boolean;
    private _pepperoniToppings: number;
    private _hamToppings: number;
    private _pineappleToppings: number;
  
    constructor(
      size: string,
      extraCheese: boolean,
      pepperoniToppings: number,
      hamToppings: number,
      pineappleToppings: number
    ) {
      this._size = size;
      this._extraCheese = extraCheese;
      this._pepperoniToppings = pepperoniToppings;
      this._hamToppings = hamToppings;
      this._pineappleToppings = pineappleToppings;
    }
  
    public get size(): string {
      return this._size;
    }
  
    public set size(size: string) {
      this._size = size;
    }
  
    public get extraCheese(): boolean {
      return this._extraCheese;
    }
  
    public set extraCheese(extraCheese: boolean) {
      this._extraCheese = extraCheese;
    }
  
    public get pepperoniToppings(): number {
      return this._pepperoniToppings;
    }
  
    public set pepperoniToppings(pepperoniToppings: number) {
      this._pepperoniToppings = pepperoniToppings;
    }
  
    public get hamToppings(): number {
      return this._hamToppings;
    }
  
    public set hamToppings(hamToppings: number) {
      this._hamToppings = hamToppings;
    }
  
    public get pineappleToppings(): number {
      return this._pineappleToppings;
    }
  
    public set pineappleToppings(pineappleToppings: number) {
      this._pineappleToppings = pineappleToppings;
    }
  
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


const pizza = new Pizza('medium', true, 1, 0, 2);

console.log(`Size: ${pizza.size}`);
console.log(`Extra cheese: ${pizza.extraCheese}`);
console.log(`Pepperoni toppings: ${pizza.pepperoniToppings}`);
console.log(`Ham toppings: ${pizza.hamToppings}`);
console.log(`Pineapple toppings: ${pizza.pineappleToppings}`);

const cost = pizza.genCost();
console.log(`Cost: $${cost}`);