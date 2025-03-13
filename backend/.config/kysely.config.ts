import {
	DummyDriver,
	PostgresAdapter,
	PostgresIntrospector,
	PostgresQueryCompiler,
} from 'kysely'
import { defineConfig } from 'kysely-ctl'
import { dialect } from '../src/config/db'

export default defineConfig({
	// replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
	dialect: dialect,
	migrations: {
		migrationFolder: "migrations",
		getMigrationPrefix: () => "001",
		// getmigrator: "migrator",
		// migrator: "migrator",
	},
	//   plugins: [],
	//   seeds: {
	//     seedFolder: "seeds",
	//   }
})
