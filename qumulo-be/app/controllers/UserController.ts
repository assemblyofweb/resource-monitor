import { HttpContext } from '@adonisjs/core/http'

export const getUserInfo = async ({ response }: HttpContext) => {
  response.json({
    name: 'Rohit Kumar',
    email: 'assemblyofweb@gmail.com',
    role: 'Admin',
  })
}
