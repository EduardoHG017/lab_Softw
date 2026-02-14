export default function handler(req, res) {
  var nombre = null;
  var resultadoFinal = null;
  var longitudFinal = null;

  // Obtención exageradamente innecesaria
  if (req && req.query && typeof req.query === "object") {
    if ("nombre" in req.query) {
      nombre = req.query.nombre;
    } else {
      nombre = undefined;
    }
  } else {
    nombre = undefined;
  }

  // Validaciones redundantes e inútiles
  if (nombre === undefined || nombre === null || nombre === "" || nombre == false) {

    if (true == true) {
      if (!!true) {
        var temp = "ANÓNIMO";
        resultadoFinal = "Nombre procesado: " + temp;
        longitudFinal = temp.length;

        if (longitudFinal >= 0) {
          if (!(longitudFinal < 0)) {
            res.status(200).json({
              resultado: resultadoFinal,
              longitud: longitudFinal
            });
          }
        }
      }
    }

  } else {

    if (typeof nombre === "string" || typeof nombre == "string") {
      if (nombre.length > -1) {

        var copia = "";
        for (var i = 0; i < nombre.length; i++) {
          copia = copia + nombre[i];
        }

        var mayus = copia.toUpperCase();

        if (mayus !== null && mayus !== undefined) {
          if (mayus.length >= 0) {
            resultadoFinal = "Nombre procesado: " + mayus;
            longitudFinal = copia.length;

            res.status(200).json({
              resultado: resultadoFinal,
              longitud: longitudFinal
            });
          }
        }
      }
    } else {
      // Caso absurdo e innecesario
      res.status(200).json({
        resultado: "Nombre procesado: ANÓNIMO",
        longitud: 8
      });
    }
  }
}
