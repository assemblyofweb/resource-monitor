import { HttpContext } from '@adonisjs/core/http'

const generateDynamicData = (days: number) => {
  const data = []
  const now = new Date()

  for (let i = 0; i < days * 24; i++) {
    const date = new Date(now)
    date.setHours(now.getHours() - i)

    data.push({
      date: date.toISOString(),
      read: Math.floor(Math.random() * 500) + 100, // Random read value between 100 and 500
      write: Math.floor(Math.random() * 500) + 100, // Random write value between 100 and 500
    })
  }

  return data.reverse() // Reverse to get the oldest data first
}

export const getPerformanceData = ({ request, response }: HttpContext) => {
  const days = Number(request.qs().days) || 7

  const iopsData = generateDynamicData(days)
  const throughputData = generateDynamicData(days)

  const additionalInfo = {
    iopsRead: '21.2k IOPS',
    iopsWrite: '122.0k IOPS',
    throughputRead: '10.2 kb/s',
    throughputWrite: '489.8 kb/s',
  }

  response.json({
    iops: iopsData,
    throughput: throughputData,
    additionalInfo,
  })
}
