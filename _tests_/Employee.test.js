const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("New Employee created", ()=> {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Set Employee Name via construtor argument", () => {
    const name = "Zi";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test ("Set ID via construtor argument", () => {
    const testValue = 50;
    const emp = new Employee("Zi", testValue);
    expect(emp.id).toBe(testValue);
});

test("Set Email via constructor argument", () => {
    const testValue = "test@mail.com";
    const emp = new Employee("Zi", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "Zi";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Get ID via getId()", () => {
    const testValue = 23;
    const emp = new Employee("Zi", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Get Email via getEmail()", () => {
    const testValue = "test@mail.com";
    const emp = new Employee("Zi", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Employee";
    const emp = new Employee("Zi", 1, "test@mail.com");
    expect(emp.getRole()).toBe(testValue);
});

