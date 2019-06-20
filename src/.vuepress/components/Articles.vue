<template>
  <div>
    <div v-for="page in filteredPages" class="article-container" v-if="!page.frontmatter.exclude">
        <div class="article-date">
<!--           {{page.createDate || '&nbsp;'}}
 -->          
          <div class="create-month">JUN</div>
          <div class="create-date">20</div>
        </div>
        <div class="article-body">
          <h3 class="article-title">
            <router-link :to="page.path">{{page.title || 'No Title'}}</router-link>
          </h3>
          <div class="tag-container">
            <i class="fas fa-tags tag-icon"></i>
            <div v-for="c in page.frontmatter.tags" class="tag">{{c}}</div>
          </div>
        </div>
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
.article-container{
display: grid;
grid-template-columns: 50px auto;
grid-template-areas: "article-date article-body";
margin-bottom: 6px;
}
.article-date{
grid-area: article-date;
}

.article-date .create-month{
  font-size: 0.8em;
}
.article-date .create-date{
  font-size: 1.4em;
}
.article-body{
grid-area: article-body;
}

h3 {
  margin: 0;
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
