import React from 'react';

function Registro() {

    return (
        <>
            <h1>Registrate</h1>
            <div className="registro">
                <form action="#" method="GET">
                    <label>
                        Nombre:
                        <input type="text" name="Nombre" required placeholder="Ingrese su nombre" />
                    </label><br/>
                    <label>
                        Email:
                        <input type="email" name="email" required placeholder="Ingrese su email" />
                    </label><br/>
                    <label>
                         Contraseña:
                        <input type="password" name="contraseña" required placeholder="Ingrese su contraseña" />
                    </label><br/>
                    <input type="submit" value="Registrarse" /><br />
                </form>
            </div>
        </>
     );
}

export default Registro;