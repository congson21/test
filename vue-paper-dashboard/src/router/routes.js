import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

//import middleware
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
const Overview = () =>
    import ( /* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Overview.vue')
const Widgets = () =>
    import ( /* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Widgets.vue')

// Pages
import User from 'src/components/Dashboard/Views/Pages/UserProfile.vue'
import TimeLine from 'src/components/Dashboard/Views/Pages/TimeLinePage.vue'
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/Dashboard/Views/Pages/Register.vue'
import Lock from 'src/components/Dashboard/Views/Pages/Lock.vue'
import RegisterSuccessfully from 'src/components/Dashboard/Views/Pages/RegisterSuccess.vue'

import PasswordReset from "src/components/Dashboard/Views/Password/Reset.vue";
import PasswordEmail from "src/components/Dashboard/Views/Password/Email.vue";

// Components pages
import Buttons from 'src/components/Dashboard/Views/Components/Buttons.vue'
import GridSystem from 'src/components/Dashboard/Views/Components/GridSystem.vue'
import Panels from 'src/components/Dashboard/Views/Components/Panels.vue'
import SweetAlert from 'src/components/Dashboard/Views/Components/SweetAlert.vue'
import Notifications from 'src/components/Dashboard/Views/Components/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Components/Icons.vue'
import Typography from 'src/components/Dashboard/Views/Components/Typography.vue'

import Maintaining from 'src/components/Dashboard/Views/AdmintratorPages/MaintainingPage.vue'
import ModeratorList from 'src/components/Dashboard/Views/AdmintratorPages/ModeratorList.vue'
import CreateNewModerator from 'src/components/Dashboard/Views/AdmintratorPages/CreateNewModerator.vue'
import EditMorator from 'src/components/Dashboard/Views/AdmintratorPages/EditMorator.vue'
import PushNotice from 'src/components/Dashboard/Views/AdmintratorPages/PushNotice.vue'

import RequestList from 'src/components/Dashboard/Views/ModeratorPages/NewRequestList.vue'
import ReportList from 'src/components/Dashboard/Views/ModeratorPages/ReportList.vue'

import ListProduct from 'src/components/Dashboard/Views/RestaurantPages/ListProduct.vue'
import ListCashiers from 'src/components/Dashboard/Views/RestaurantPages/ListCashiers.vue'
import CreateAccountCashier from 'src/components/Dashboard/Views/RestaurantPages/CreateAccountCashier.vue'
import AddProduct from 'src/components/Dashboard/Views/RestaurantPages/AddProduct.vue'
import Revenue from 'src/components/Dashboard/Views/RestaurantPages/Revenue.vue'
import EditProduct from 'src/components/Dashboard/Views/RestaurantPages/EditProduct.vue'
import EditCashier from 'src/components/Dashboard/Views/RestaurantPages/EditCashier.vue'

// TableList pages
const RegularTables = () =>
    import ( /* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/RegularTables.vue');

// Maps pages
const GoogleMaps = () =>
    import ( /* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/GoogleMaps.vue')

// Charts
const Charts = () =>
    import ( /* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Charts.vue')

// Example pages
const UserProfile = () =>
    import ('src/components/Dashboard/Views/Examples/UserProfile.vue');
// // User Management
const ListUserPage = () =>
    import ("src/components/Dashboard/Views/Examples/UserManagement/ListUserPage.vue");

let componentsMenu = {
    path: '/administrator',
    component: DashboardLayout,
    redirect: '/administrator/moderatorlist',
    canActive: false,
    beforeEnter: (to, from, next) => {
        const currentRole = localStorage.roleID;
        if (currentRole === "5") {
            next();
        } else {
            next("/login");
        }
    },
    children: [{
            path: 'buttons',
            name: 'Buttons',
            component: Buttons
        },
        {
            path: 'grid-system',
            name: 'Grid System',
            component: GridSystem
        },
        {
            path: 'panels',
            name: 'Panels',
            component: Panels
        },
        {
            path: 'sweet-alert',
            name: 'Sweet Alert',
            component: SweetAlert
        },
        {
            path: 'notifications',
            name: 'Notifications',
            component: Notifications
        },
        {
            path: 'maintaining',
            name: 'maintaining',
            component: Maintaining,

        },
        {
            path: 'pushnotice',
            name: 'pushnotice',
            component: PushNotice,

        },
        {
            path: 'moderatorlist',
            name: 'moderatorlist',
            component: ModeratorList
        },
        {
            path: 'managemoderator',
            name: 'managemoderator',
            component: EditMorator
        },
        {
            path: 'createnewmoderator',
            name: 'createnewmoderator',
            component: CreateNewModerator
        },
        {
            path: 'list',
            name: 'list',
            component: ListProduct
        },
        {
            path: 'icons',
            name: 'Icons',
            component: Icons
        },
        {
            path: 'typography',
            name: 'Typography',
            component: Typography,

        }

    ]
}

let componentsModerator = {
    path: '/moderator',
    component: DashboardLayout,
    redirect: '/moderator/newrequest',
    beforeEnter: (to, from, next) => {
        const currentRole = localStorage.roleID;
        if (currentRole === "4" || currentRole === "5") {
            next();
        } else {
            next("/login");
        }
    },
    children: [{
            path: 'newrequest',
            name: 'newrequest',
            component: RequestList
        }, {
            path: 'reportlist',
            name: 'reportlist',
            component: ReportList
        }

    ]
}

let componentsRes = {
    path: '/myrestaurant',
    component: DashboardLayout,
    redirect: '/myrestaurant/buttons',
    beforeEnter: (to, from, next) => {
        const currentRole = localStorage.roleID;
        if (currentRole === "2") {
            next();
        } else {
            next("/login");
        }
    },
    children: [{
            path: 'buttons',
            name: 'Buttons',
            component: Buttons
        },
        {
            path: 'grid-system',
            name: 'Grid System',
            component: GridSystem
        },
        {
            path: 'panels',
            name: 'Panels',
            component: Panels
        },
        {
            path: 'sweet-alert',
            name: 'Sweet Alert',
            component: SweetAlert
        },
        {
            path: 'notifications',
            name: 'Notifications',
            component: Notifications
        },
        {
            path: 'createnewaccountcashier',
            name: 'createnewaccountcashier',
            component: CreateAccountCashier,

        },
        {
            path: 'listCashiers',
            name: 'listCashiers',
            component: ListCashiers
        },
        {
            path: 'listproduct',
            name: 'listproduct',
            component: ListProduct
        },
        {
            path: 'addProduct',
            name: 'addProduct',
            component: AddProduct
        },
        {
            path: 'revenue',
            name: 'revenue',
            component: Revenue
        },
        {
            //path: 'productmanagement/:id',
            path: 'productmanagement',
            name: 'productmanagement',
            component: EditProduct
        },

        {
            path: 'cashiermanagement',
            name: 'cashiermanagement',
            component: EditCashier
        },
    ]
}



let tablesMenu = {
    path: '/table-list',
    component: DashboardLayout,
    redirect: '/table-list/regular',
    children: [{
        path: 'regular',
        name: 'Regular Tables',
        component: RegularTables
    }, ]
}

let mapsMenu = {
    path: '/maps',
    component: DashboardLayout,
    redirect: '/maps/google',
    children: [{
        path: 'google',
        name: 'Google Maps',
        component: GoogleMaps
    }]
}

let pagesMenu = {
    path: '/pages',
    component: DashboardLayout,
    redirect: '/pages/user',
    children: [{
            path: 'user',
            name: 'User Page',
            component: User
        },
        {
            path: 'timeline',
            name: 'Timeline Page',
            component: TimeLine
        }
    ]
}

let loginPage = {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { middleware: guest }
}

let registerPage = {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { middleware: guest }
}
let registerSuccessfully = {
    path: '/registerSuccessfully',
    name: 'RegisterSuccessfully',
    component: RegisterSuccessfully,
    meta: { middleware: guest }
}

let lockPage = {
    path: '/lock',
    name: 'Lock',
    component: Lock
}
let forgotPassword = {
    path: "/password/reset",
    name: "Password Reset",
    component: PasswordReset,
    meta: { middleware: guest }
}

let resetPassword = {
    path: "/password/email",
    name: "Password Reset",
    component: PasswordEmail,
    meta: { middleware: guest }
}

let examplesMenu = {
    path: "/user",
    component: DashboardLayout,
    name: "User",
    children: [{
            path: "user-profile",
            name: "User Profile",
            components: { default: UserProfile },
            // meta: { middleware: auth }
        },
        {
            path: "user-management/list-users",
            name: "List Users",
            components: { default: ListUserPage },
            // meta: { middleware: auth }
        }
    ]
};

const routes = [{
        path: '/',
        component: DashboardLayout,
        redirect: '/admin/overview',
        children: [{
            path: 'charts',
            name: 'Charts',
            component: Charts
        }]
    },
    componentsMenu,
    componentsModerator,
    tablesMenu,
    mapsMenu,
    pagesMenu,
    loginPage,
    registerPage,
    registerSuccessfully,
    lockPage,
    forgotPassword,
    resetPassword,
    examplesMenu,
    componentsRes,
    {
        path: '/admin',
        component: DashboardLayout,
        redirect: '/admin/overview',
        meta: { middleware: auth },
        children: [{
                path: 'overview',
                name: 'Overview',
                component: Overview,
                meta: { middleware: auth },
            },
            {
                path: 'widgets',
                name: 'Widgets',
                component: Widgets,
                meta: { middleware: auth },
            }
        ]
    },
    { path: '*', component: NotFound }
];

export default routes