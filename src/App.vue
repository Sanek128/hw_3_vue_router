<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>

<script>

import Header from "@/components/Vizitka/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>

</style>
