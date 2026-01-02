## Como probar la implementacion
- abrir el proyecto en cualquier IDE (se uso VSCode para la prueba)
- ingresar a https://posthog.com/, iniciar sesión y abrir el dashboard
- verificar que la api key y URL estén bien ingresadas (index.js)
- correr el proyecto y esperar a que cargue la página.
- moverse y clickear los botones disponibles :D
- en posthog->dashboard->activity se podrá visualizar una tabla con los registros de movimientos e interacciones
## Componentes importantes
- Index.js: conexiones entre los componentes de la aplicación y conexion con posthog
- Home.js: página landing que contiene un botón de accionamiento
- AboutPage.js: segunda pagina con propósitos meramente de navegacion
- App.js: diseño y parte logica de la app, dentro se encuentra los routers y se habilita la funcion PHpageViewerTraker
- PHpageViewerTraker.js: se encarga de monitorear y registrar las interacciones del usuario
