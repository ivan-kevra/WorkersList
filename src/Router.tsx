import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Doctors } from './pages/Doctors'
import { Nurses } from './pages/Nurses'
import { AllWorkers } from './pages/AllWorkers'

const router = createBrowserRouter([
    {element: <AllWorkers />,path: '/'},
    {element: <Doctors />,path: '/doctors'},
    {element: <Nurses />,path: '/nurses'},
])

export const Router = () => {
  return <RouterProvider router={router} />
}