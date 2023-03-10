import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      'postgres://gtvnjraj:YxRO3-XBeHCBP0TsB-lYe_svq_eXrUqA@john.db.elephantsql.com/gtvnjraj',
  });
  global.connection = pool;

  return pool.connect();
}

export { connect };
