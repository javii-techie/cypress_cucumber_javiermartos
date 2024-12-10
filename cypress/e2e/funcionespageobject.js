import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import todopage from "./todopage";

Given("I open the todo application", () => {
    todopage.visit();
});

When("I add {string} to the list", (task) => {
  todopage.addTask(task);
});

Then("I should see {string} in the list", (task) => {
  todopage.taskShouldBeVisible(task);
});

When("I mark {string} as completed", (task) => {
  todopage.markTaskAsCompleted(task);
});

Then("{string} should be marked as completed", (task) => {
  todopage.taskShouldBeMarkedAsCompleted(task);
});

When("I edit {string} to {string}", (oldTask, newTask) => {
  todopage.editTask(oldTask, newTask);
});

When("I unmark {string} as completed", (task) => {
    todopage.unmarkTaskAsCompleted(task);
});

Then("{string} should not be marked as completed", (task) => {
    todopage.taskShouldNotBeMarkedAsCompleted(task);
});
