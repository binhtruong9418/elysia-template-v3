import { defineConfig } from '@mikro-orm/postgresql';

export default defineConfig({
  entities: ['src/entities'],
  dbName: 'elysia-mikro-orm',
  port: 5432,
  host: 'localhost',
  user: 'postgres',
  password: '1',
});
