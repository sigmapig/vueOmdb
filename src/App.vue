<template>
    <div id="app">
        <Nav/>
        <SideBar/>
        <router-view/>
        <Footer/>
        <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
        </aside>
    </div>
</template>

<script>

import Nav from './components/partials/Nav.vue'
import SideBar from './components/partials/SideBar.vue'
import Footer from './components/partials/Footer'
import { store } from './store/Store'

export default {
    
    name: 'app',
    store,
    components: {
        Nav,
        SideBar,
        Footer,
    }
}
</script>