import { fetchImage } from "./model.js"
import { buildDog } from "./view.js"
import { statics } from "./view.js"

statics()
const result = await fetchImage()
buildDog(result)

