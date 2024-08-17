const fs = require('fs');


function crearCarpetaYArchivo(rutaCarpeta, nombreArchivo, contenido) {
  fs.mkdir(rutaCarpeta, { recursive: true }, (err) => {
    if (err) {
      console.error('Error al crear la carpeta:', err);
    } else {
      const rutaArchivo = `${rutaCarpeta}/${nombreArchivo}`;
      fs.writeFile(rutaArchivo, contenido, (err) => {
        if (err) {
          console.error('Error al crear el archivo:', err);
        } else {
          console.log('Archivo creado correctamente:', rutaArchivo);
        }
      });
    }
  });
}



const nombreCarpeta = 'EvaFajardo';
const nombreArchivo = 'Fajardo.txt';
const contenido = 'Dios es amor';



crearCarpetaYArchivo(nombreCarpeta, nombreArchivo, contenido);
 

 

// ELIMINAR


/*  const fs = require('fs');


function eliminarArchivoYCarpeta(rutaCarpeta, nombreArchivo) {
  const rutaArchivo = `${rutaCarpeta}/${nombreArchivo}`;



  fs.unlink(rutaArchivo, (err) => {
    if (err) {
      console.error('Error al eliminar el archivo:', err);
    } else {
      console.log('Archivo eliminado correctamente:', rutaArchivo);


      fs.rmdir(rutaCarpeta, { recursive: true }, (err) => {
        if (err) {
          console.error('Error al eliminar la carpeta:', err);
        } else {
          console.log('Carpeta eliminada correctamente:', rutaCarpeta);
        }
      });
    }
  });
}



const nombreCarpeta = 'EvaFajardo';
const nombreArchivo = 'Fajardo.txt';



eliminarArchivoYCarpeta(nombreCarpeta, nombreArchivo);


 */