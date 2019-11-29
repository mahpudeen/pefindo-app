
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Scoring_Engine/scoringEngine.vue') },
      { path: 'ScoringEngine', component: () => import('pages/Scoring_Engine/scoringEngine.vue') },
      { path: 'Model', component: () => import('pages/Model/model.vue') },
      { path: 'input_new_model', component: () => import('pages/Model/inputnewmodel.vue') }
      
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
