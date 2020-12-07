const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
    const testValue = "Baylor";
    const emp = new Intern("Zi", 1 , "test@mail.com", testValue);
    expect(emp.school).toBe(testValue);
})