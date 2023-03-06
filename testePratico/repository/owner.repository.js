import { connect } from './db.js';

async function insertOwner(owner) {
  const conn = await connect();
  try {
    const sql = 'INSERT INTO owner (name, phone) VALUES ($1, $2) RETURNING *';
    const values = [owner.name, owner.phone];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateOwner(owner) {
  const conn = await connect();
  try {
    const sql =
      'UPDATE owner SET name = $1, phone = $2 WHERE owner_id = $3 RETURNING *';
    const values = [owner.name, owner.phone, owner.owner_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteOwner(id) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM owner WHERE owner_id = $1', [
      id,
    ]);
    await conn.query('DELETE FROM owner WHERE owner_id = $1', [id]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getOwners() {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM owner');
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getOwner(id) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM owner WHERE owner_id = $1', [
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
  insertOwner,
  updateOwner,
  deleteOwner,
  getOwners,
  getOwner,
};
