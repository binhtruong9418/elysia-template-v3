import {defineConfig, PostgreSqlDriver} from '@mikro-orm/postgresql';

export default defineConfig({
  driver: PostgreSqlDriver,
  entities: ['src/entities'],
  clientUrl: 'postgresql://postgres:1@localhost:5432/elysia-mikro-orm',
});
