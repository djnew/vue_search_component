<template>
  <div class="home">
    <search-component />
  </div>
</template>

<script>
import searchComponent from "@/components/search/search_component.vue";

export default {
  name: "Home",
  components: {
    searchComponent,
  },
};
</script>
