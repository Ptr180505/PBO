class Employee {
  calculateSalary() {
    console.log("Menghitung gaji karyawan...");
  }
}

class FullTimeEmployee extends Employee {
  calculateSalary() {
    const salary = 5000000;
    console.log(`Gaji karyawan full-time adalah Rp${salary.toLocaleString("id-ID")}`);
  }
}

class PartTimeEmployee extends Employee {
  calculateSalary(hoursWorked) {
    const ratePerHour = 50000;
    const salary = ratePerHour * hoursWorked;
    console.log(`Gaji karyawan part-time (${hoursWorked} jam) adalah Rp${salary.toLocaleString("id-ID")}`);
  }
}

const fullTime = new FullTimeEmployee();
fullTime.calculateSalary(); 

const partTime = new PartTimeEmployee();
partTime.calculateSalary(40);
