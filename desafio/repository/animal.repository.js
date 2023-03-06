import { connect } from './db.js';

async function insertAnimal(animal) {
  const conn = await connect();
  try {
    const sql =
      'INSERT INTO animal (name, type, owner_id) VALUES ($1, $2, $3) RETURNING *';
    const values = [animal.name, animal.type, animal.owner_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal) {
  const conn = await connect();
  try {
    const sql =
      'UPDATE animal SET name = $1, type = $2, owner_id = $3 WHERE animal_id = $4 RETURNING *';
    const values = [
      animal.name,
      animal.type,
      animal.owner_id,
      animal.animal_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM animal WHERE animal_id = $1', [
      id,
    ]);
    await conn.query('DELETE FROM animal WHERE animal_id = $1', [id]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimals() {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM animal');
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimalsByOwnerId(ownerId) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM animal WHERE owner_id = $1', [
      ownerId,
    ]);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM animal WHERE animal_id = $1', [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimalsByOwnerId,
  getAnimal,
};
