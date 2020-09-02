<template>
    <ul class="nav nav-pills" id="div">
        <li class="nav-item">
            <router-link class="nav-link" active-class="active" exact to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/Contacts">Contacts</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/MyProjects">MyProjects</router-link>
        </li>
        <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
    </ul>
</template>

<script>
export default {
    name: 'Header'
}
</script>