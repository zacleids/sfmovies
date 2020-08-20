'use strict';

exports.up = async function up (Knex) {
  await Knex.schema.createTable('movies', (table) => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.integer('release_year');
  });
};

exports.down = async function down (Knex)  {
  await Knex.schema.dropTable('movies');
};
