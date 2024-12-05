import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the todo application", () => {
  cy.visit("http://todomvc-app-for-testing.surge.sh/");
});

When("I add {string} to the list", (task) => {
  cy.get(".new-todo").type(task).type("{enter}");
});

Then("I should see {string} in the list", (task) => {
  cy.get(".todo-list").contains(task);
});

When("I mark {string} as completed", (task) => {
  cy.get(".todo-list").contains(task).parents("li").find('input[type="checkbox"]').check({ force: true });
});

Then("{string} should be marked as completed", (task) => {
  cy.get(".todo-list")
    .contains(task)
    .parents("li")
    .should("have.class", "completed");
});

When("I unmark {string} as completed", (task) => {
  cy.get(".todo-list").contains(task).parents("li").find('input[type="checkbox"]').uncheck({ force: true });
});

Then("{string} should not be marked as completed", (task) => {
  cy.get(".todo-list")
    .contains(task)
    .parents("li")
    .should("not.have.class", "completed");
});

When("I edit the task {string} to {string}", (oldTask, newTask) => {
  cy.get(".todo-list").contains(oldTask).dblclick();
  cy.get(".edit").clear().type(`${newTask}{enter}`);
});
