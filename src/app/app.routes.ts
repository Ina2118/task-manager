import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Projects } from './features/projects/projects'; 
import { ProjectDetails } from './features/project-details/project-details'; 
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { MyProjects } from './features/my-projects/my-projects';
import { TaskDetails } from './features/task-details/task-details';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'projects',
        component: Projects,
    },
    {
        path:'projects/:id',
        component: ProjectDetails,
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'register',
        component: Register,
    },
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'my-projects',
        component: MyProjects,
    },
    {
        path: 'tasks/:id',
        component: TaskDetails,
    },

];
