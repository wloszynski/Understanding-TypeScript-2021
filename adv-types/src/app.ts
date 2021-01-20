type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin{}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Tim",
  priviliges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// gonna be type: number
type Universal = Combinable & Numeric;
