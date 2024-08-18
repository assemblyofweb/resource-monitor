/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { getPerformanceData } from '#controllers/PerformanceController'
import { updateSnapshotPolicy, getSnapshotPolicy } from '#controllers/SnapshotpolicyController'
import { getUserInfo } from '#controllers/UserController'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.get('/api/user', getUserInfo)

router.get('/api/performance', getPerformanceData)
router.get('/api/snapshot-policy', getSnapshotPolicy)
router.put('/api/snapshot-policy', updateSnapshotPolicy)
