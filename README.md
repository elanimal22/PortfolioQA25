# 🧪 Portafolio de QA - OpenCart Demo

Este repositorio presenta un portafolio completo de testing funcional manual y automatizado, realizado sobre la aplicación de e-commerce [OpenCart Demo](https://opencart.abstracta.us/). Fue creado con el objetivo de mostrar mis habilidades como QA tanto en planificación, ejecución, documentación como en automatización de pruebas.

---

## 📁 Contenido del portafolio

### 1. Pruebas Manuales

- **`manual-tests/casos-de-prueba-opencart.xlsx`**: contiene casos de prueba detallados (login, registro, búsqueda, carrito, checkout) con pasos, datos, resultado esperado, prioridad y estado.
- **`coverage/matriz-de-cobertura-opencart.xlsx`**: matriz funcionalidad vs casos cubiertos (manual y automatizado).
- **`test-plan/plan-de-testing-opencart.xlsx`**: plan de testing con prioridades, estimaciones, esfuerzo y riesgo.
- **`bdd-stories/historias-usuario-BDD.md`**: historias de usuario redactadas con criterios de aceptación en formato BDD (Gherkin).
- **`bugs/`**: reportes de bugs reales detectados en la demo con pasos para reproducir, severidad y capturas.

### 2. Automatización

- **Framework:** Cypress + Page Object Model
- **Ubicación:** `/automation/cypress`
- **Pruebas automatizadas:** login, registro, búsqueda, carrito
- **Capturas:** disponibles en `/automation/screenshots/`
- **Instrucciones:** ver `automation/README-automation.md`

---

## 🧑‍💻 Mi Rol como QA

- Diseñé y ejecuté pruebas funcionales manuales priorizando riesgos.
- Redacté historias de usuario claras con criterios de aceptación BDD.
- Identifiqué y reporté bugs reales con evidencia visual.
- Implementé pruebas automatizadas reutilizables en Cypress siguiendo buenas prácticas (POM).
- Documenté todo el proceso para facilitar la comprensión por parte de reclutadores y equipos de desarrollo.

---

## ▶️ Cómo ejecutar los tests automatizados

1. Cloná el repositorio.
2. Instalá las dependencias:

   ```bash
   npm install
