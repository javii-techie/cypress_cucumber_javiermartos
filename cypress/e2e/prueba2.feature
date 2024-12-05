Feature: Gestión de Tareas

  Scenario: Agregar una tarea a la lista
    Given I open the todo application
    When I add "Tarea 1" to the list
    Then I should see "Tarea 1" in the list

  Scenario: Agregar una tarea y marcarla como completada
    Given I open the todo application
    When I add "Tarea 1" to the list
    Then I should see "Tarea 1" in the list
    When I mark "Tarea 1" as completed
    Then "Tarea 1" should be marked as completed

 Scenario: Agregar una tarea, completarla y desmarcarla
    Given I open the todo application
    When I add "Tarea 1" to the list
    And I mark "Tarea 1" as completed
    And I unmark "Tarea 1" as completed
    Then "Tarea 1" should not be marked as completed

  Scenario: Editar una tarea
    Given I open the todo application
    When I add "Tarea 1" to the list
    Then I should see "Tarea 1" in the list
    When I edit "Tarea 1" to "Tarea 1.1"
    Then I should see "Tarea 1.1" in the list
