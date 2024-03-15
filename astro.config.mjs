import db from "@astrojs/db"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"


// https://astro.build/config
export default defineConfig({
	integrations: [db(), tailwind()],
	output: "server",
})
