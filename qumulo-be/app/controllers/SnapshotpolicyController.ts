import { dirname, join } from 'path'
import { writeFileSync, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { HttpContext } from '@adonisjs/core/http'
const __filename = fileURLToPath(import.meta.url)

export const getSnapshotPolicy = async ({ response }: HttpContext) => {
  const filePath = join(dirname(__filename), '../../data/snapshotPolicy.json')
  response.json(JSON.parse(readFileSync(filePath, 'utf8').toString()))
}
export const updateSnapshotPolicy = async ({ request, response }: HttpContext) => {
  const updatedPolicy = request.body()
  console.log({
    updatedPolicy,
  })
  const filePath = join(dirname(__filename), '../../data/snapshotPolicy.json')

  writeFileSync(filePath, JSON.stringify(updatedPolicy, null, 2))

  response.json({ message: 'Snapshot policy updated successfully' })
}
