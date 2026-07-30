import React, { createContext, useContext, useState } from "react";
import employeeData from "../data/employeeJ.json";

export interface Employee {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  experience: string;
  image: string;
}

interface EmployeeContextType {
  employees: Employee[];

  addEmployee: (employee: Employee) => void;

  deleteEmployee: (id: string) => void;

  updateEmployee: (employee: Employee) => void;

  getEmployeeById: (id: string) => Employee | undefined;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined,
);

export function EmployeeProvider({ children }: { children: React.ReactNode }) {
  const [employees, setEmployees] = useState<Employee[]>(employeeData);

  // Add Employee
  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  // Delete Employee
  const deleteEmployee = (id: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id),
    );
  };

  // Update Employee
  const updateEmployee = (updatedEmployee: Employee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
    );
  };

  // Get Employee By Id
  const getEmployeeById = (id: string) => {
    return employees.find((employee) => employee.id === id);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        deleteEmployee,
        updateEmployee,
        getEmployeeById,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployee() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error("useEmployee must be used inside EmployeeProvider");
  }

  return context;
}
