<template>
  <div>
    <div v-for="page in filteredPages" class="article-container" v-if="!page.frontmatter.exclude">
      <h3 class="article-title">
        <router-link :to="page.path">{{page.title || 'No Title'}}</router-link>
      </h3>
      <div class="tag-container">
        <i class="fas fa-tags tag-icon"></i>
        <div v-for="c in page.frontmatter.tags" class="tag">{{c}}</div>
      </div>
      <div
        v-if="page.frontmatter.description"
        class="article-description"
      >{{page.frontmatter.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: ["pages", "prefix"],
  computed: {
    filteredPages() {
      return this.pages
        .filter(page => page.path.includes(this.prefix || ""))
        .filter(page => page.path != "/");
    }
  }
};
</script>

<style>
h3 {
  margin: 10px 0 0 0;
}
.tag-container {
  min-height: 33px;
}
.tag {
  display: inline-block;
  margin: 5px 10px 5px 0px;
  color: #585858f0;
  font-size: 0.9em;
  background-color: #ececec;
  border-radius: 5px;
  padding: 2px 7px;
}
</style>
