import React from "react";

function Loguearse() {

    return(
        <div className="loguearse">
            <h1>Ingresar Datos</h1>
            <form action="#" method="GET">
                    <label>
                        Email:
                        <input type="email" name="email" required placeholder="Ingrese su email" />
                    </label><br/>
                    <label>
                         Contraseña:
                        <input type="password" name="contraseña" required placeholder="Ingrese su contraseña" />
                    </label><br/>
                    <input type="submit" value="Login" /><br />
                </form>
        </div>
    );
}

export default Loguearse;