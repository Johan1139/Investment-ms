exports.up = (knex) => knex.schema.createTable('investments', (table) => {
  table.increments('id');
  table.integer('idUser');
  table.integer('idProject');
  table.boolean('status').defaultTo('false');
  table.integer('idRewards');
  table.timestamps(true, true);
});

exports.down = (knex) => knex.schema.dropTable('investments');
