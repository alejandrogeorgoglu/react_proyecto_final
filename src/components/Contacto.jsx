import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import "../components/Contact.css";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);

    alert("Gracias por su comentario, en breve les responderemos.");
  };

  return (
    <div className="container">
      <h1 className="titulo-contacto">Contactenos:</h1>
      <form className="form" onSubmit={handleSubmit(enviar)}>
        <input
          className="nombre-contacto"
          type="text"
          placeholder="Ingrese su nombre"
          {...register("nombre")}
        />
        <hr />
        <input
          className="nombre-contacto"
          type="email"
          placeholder="Ingrese su email"
          {...register("email")}
        />
        <hr />
        <input
          className="comentario-contacto"
          type="comentario"
          placeholder="Ingrese su comentario"
          {...register("comentario")}
        />
        <hr />
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Contacto;
