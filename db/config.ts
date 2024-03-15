import { column, defineDb, defineTable } from "astro:db"

const Post = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		description: column.text(),
	},
})

// https://astro.build/db/config
export default defineDb({
	tables: { Post },
})
