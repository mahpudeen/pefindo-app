
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      // router Scoring Engine
      { path: '', component: () => import('pages/Scoring_Engine/scoringEngine.vue') },
      { path: 'ScoringEngine', component: () => import('pages/Scoring_Engine/scoringEngine.vue') },
      { path: 'tradisional', component: () => import('pages/Scoring_Engine/tradisional.vue') },
      { path: 'ai', component: () => import('pages/Scoring_Engine/ai.vue') },
      { path: 'bre', component: () => import('pages/Scoring_Engine/bre.vue') },
      
      // Router Model
      { path: 'Model', component: () => import('pages/Model/model.vue') },
      { path: 'input_new_model', component: () => import('pages/Model/inputnewmodel.vue') },
      { path: 'view', component: () => import('pages/Model/view.vue') },
      { path: 'edit', component: () => import('pages/Model/editmodel.vue') },
      { path: 'editparameter', component: () => import('pages/Model/parameter/editparameter.vue') }
      
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
