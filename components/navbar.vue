<template>
  <nav class="flex justify-center bg-white py-3">
    <div class="content-center">
      <nuxt-link
        to="/"
        class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out"
      >
        Home
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style scoped>
</style>