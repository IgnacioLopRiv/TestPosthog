import posthog from "posthog-js";

function homePage() {
  return (
    <div>
      <h1>Bienvenido a la pagina principal!</h1>
      <p>Aca se probará la conexión con posthog</p>

      <button onClick={() => {
        posthog.capture('boton de Home apretado', {'nombre_usuario': 'RokunZ' });
      }}> Apretame!
      </button>

    </div>
  );
}
export default homePage; 