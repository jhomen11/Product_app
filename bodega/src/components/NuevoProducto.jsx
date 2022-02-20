import { useDispatch, useSelector } from 'react-redux'
//Importar actions Redux
import { crearproductoAction } from '../actions/productosActions'

const NuevoProducto = () => {

  const dispatch = useDispatch()

  //llamado de la funcion del action
  const agrgarProducto = () => dispatch(crearproductoAction())

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validar formulario

    //Manejo de Errores

    //crear el producto
    agrgarProducto()
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold">
                Agregar Nuevo Producto
              </h2>
              <form 
                onSubmit={handleSubmit}
              >
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">Nombre del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="nombre"
                  />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="descripcion">Descripción</label>
                    <textarea
                    className="form-control"
                    style={{ resize: "none" }}
                    id="descripcion"
                    placeholder="Descripción"
                    name="descripcion"
                  ></textarea>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="precio"
                  />
                </div>
                <button className="btn btn-dark d-block w-100 mt-3">Agregar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;