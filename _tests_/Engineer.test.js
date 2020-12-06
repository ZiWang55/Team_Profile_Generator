const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Set Github Account via construtor argument", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Zi", 1, "test@mail.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Zi", 1, "test@mail.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
})

test("Get GitHub UN via getGitHub()", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Zi", 1, "test@mail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
})