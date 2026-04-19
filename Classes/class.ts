//! Classes

// class Department {
//   public name : string;
//   private employee : string[];

//   constructor(name : string){
//            this.name = name;
//            this.employee = [];
//   }
  
//    public addEmployee(emp : string){
//        this.employee.push(emp);
//    }

//    public printNoOfEmployee(){
//     console.log("No of the employee :", this.employee.length);
//    }
// }

// const d1 = new Department("Cse");
// d1.addEmployee("Nref");
// d1.addEmployee("Nref");
// d1.addEmployee("Nref");
// d1.addEmployee("Nref");

// d1.printNoOfEmployee();



//! Readonly :  One time u can initiailised, 


// class Department {
//   public name : string;
//   private employee : string[];
//   readonly id  : number;

//   constructor(name : string){
//            this.name = name;
//            this.employee = [];
//            this.id = 123;
           
//   }
  
//    public addEmployee(emp : string){
//     this.id = 123;                        // cannot re- aasign here, 
//        this.employee.push(emp);
//    }

//    public printNoOfEmployee(){
//     console.log("No of the employee :", this.employee.length);
//    }
// }

// const d1 = new Department("Cse");
// d1.addEmployee("Nref");
// d1.addEmployee("Nref");
// d1.addEmployee("Nref");
// d1.addEmployee("Nref");

// d1.printNoOfEmployee();