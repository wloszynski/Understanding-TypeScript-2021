class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Tim");
accounting.addEmployee("Tom");

accounting.printEmployeeInformation();

console.log(accounting);
accounting.describe();

// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe();
