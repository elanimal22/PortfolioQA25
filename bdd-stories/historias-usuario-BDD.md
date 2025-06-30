```gherkin
Feature: Login
  Scenario: Usuario accede con credenciales válidas
    Given que el usuario está en la página de login
    When ingresa un email y contraseña válidos
    Then accede exitosamente a su cuenta
```