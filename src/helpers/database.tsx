/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */


// Importamos las dependencias necesarias de 'react-native-sqlite-storage'
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

// Definimos el nombre de la base de datos
const dbName = 'eventos.db';

// Definimos el nombre de la tabla
const tableName = 'eventos';

// Habilitamos las promesas para manejar operaciones asíncronas
enablePromise(true);

// Declaramos una variable para almacenar la conexión a la base de datos
let db: SQLiteDatabase | null = null;

// Función para obtener la conexión a la base de datos
export async function getDbConnection() {
  // Verificamos si la conexión ya está abierta
  if (!db) {
    // Si no está abierta, abrimos una nueva conexión
    db = await openDatabase({ name: dbName, location: 'default' });
  }
  // Devolvemos la conexión
  return db;
}

// Función para cerrar la conexión a la base de datos
export async function closeDbConnection() {
  // Verificamos si la conexión está abierta
  if (db) {
    // Si está abierta, cerramos la conexión
    await db.close();
    // Establecemos la variable db como nula
    db = null;
  }
}

// Función para crear la tabla 'eventos' si no existe
export async function createTable() {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellido TEXT, Centro TEXT, Email TEXT, telefono TEXT, Proceso TEXT, fecha TEXT, descripcion TEXT, fotoUri TEXT, fotoLink TEXT)`;
  const connection = await getDbConnection();
  await connection.executeSql(query);
}

// Función para inicializar la base de datos
export async function initDatabase() {
  // Llamamos a la función createTable() para crear la tabla 'eventos' si no existe
  await createTable();
}

// Función para insertar un nuevo evento en la base de datos
export async function insertarEvento(nombre: string, apellido: string, Centro: string, Email: string, telefono: string, Proceso: string, fecha: string, descripcion: string, fotoUri: string, fotoLink: string) {
  const insertQuery = `INSERT INTO ${tableName} (nombre, apellido, Centro, Email, telefono, Proceso, fecha, descripcion, fotoUri, fotoLink) VALUES ('${nombre}', '${apellido}', '${Centro}', '${Email}', '${telefono}', '${Proceso}', '${fecha}', '${descripcion}', '${fotoUri}', '${fotoLink}')`;
  const connection = await getDbConnection();
  await connection.executeSql(insertQuery);
  await closeDbConnection();
}


export async function obtenerEventos() {
  try {
    const eventos = [];
    const db = await getDbConnection();
    const results = await db.executeSql(`SELECT id, nombre, apellido, Centro, Email, telefono, Proceso, fecha, descripcion, fotoUri, fotoLink FROM ${tableName}`);

    for (let i = 0; i < results[0].rows.length; i++) {
      eventos.push(results[0].rows.item(i));
    }

    return eventos;
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    throw error;
  }
}

export async function eliminarEvento(eventoId: number) {
  try {
    const deleteQuery = `DELETE FROM ${tableName} WHERE id = ${eventoId}`;
    const connection = await getDbConnection();
    await connection.executeSql(deleteQuery);
  } catch (error) {
    console.error('Error al eliminar evento:', error);
    throw error;
  }
}


/*

// Función para obtener todos los eventos de la base de datos
export async function obtenerEventos() {
  // Creamos un array vacío para almacenar los eventos
  const eventos = [];

  // Obtenemos la conexión a la base de datos
  const connection = await getDbConnection();

  // Ejecutamos la consulta SQL para obtener todos los eventos de la tabla
  const result = await connection.executeSql(`SELECT * FROM ${tableName}`);

  // Iteramos sobre los resultados obtenidos
  for (let i = 0; i < result.rows.length; i++) {
    // Agregamos cada evento al array 'eventos'
    eventos.push(result.rows.item(i));
  }

  // Cerramos la conexión a la base de datos
  await closeDbConnection();

  // Devolvemos el array con todos los eventos obtenidos
  return eventos;
}*/

