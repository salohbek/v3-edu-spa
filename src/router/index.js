import { createRouter, createWebHistory } from 'vue-router'
import index from '../components/index.vue'
import about from '../components/about.vue'
import contact from '../components/contact.vue'
import courses from '../components/courses.vue'
import events from '../components/events.vue'
import pricing from '../components/pricing.vue'
import trainers from '../components/trainers.vue'
import courseDetails from '../components/course-details.vue'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: index
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/courses',
    name: 'courses',
    component: courses
  },
  {
    path: '/events',
    name: 'events',
    component: events
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: pricing
  },
  {
    path: '/trainers',
    name: 'trainers',
    component: trainers
  },
  {
    path: '/course-details',
    name: 'course-details',
    component: courseDetails
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
