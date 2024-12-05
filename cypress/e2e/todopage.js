class TodoPage {
    visit() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/');
    }

    addTask(task) {
        cy.get('.new-todo').type(`${task}{enter}`);
    }

    taskShouldBeVisible(task) {
        cy.get('.todo-list').contains(task).should('be.visible');
    }

    markTaskAsCompleted(task) {
        cy.get('.todo-list')
          .contains(task)
          .parents('li')
          .find('input[type="checkbox"]')
          .check({ force: true });
    }

    taskShouldBeMarkedAsCompleted(task) {
        cy.get('.todo-list')
          .contains(task)
          .parents('li')
          .should('have.class', 'completed');
    }

    unmarkTaskAsCompleted(task) {
        cy.get('.todo-list')
          .contains(task)
          .parents('li')
          .find('input[type="checkbox"]')
          .uncheck({ force: true });
    }

    taskShouldNotBeMarkedAsCompleted(task) {
        cy.get('.todo-list')
          .contains(task)
          .parents('li')
          .should('not.have.class', 'completed');
    }

    editTask(oldTask, newTask) {
        cy.get('.todo-list')
          .contains(oldTask)
          .dblclick();
        cy.get('.edit')
          .clear()
          .type(`${newTask}{enter}`);
    }
}

export default new TodoPage();
