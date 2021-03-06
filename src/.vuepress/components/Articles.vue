<template>
  <div>
    <div v-for="page in filteredPages" class="article-container" v-if="!page.frontmatter.exclude">
      <div class="article-date">
        <div class="create-month">{{page.frontmatter.createAt | month}}</div>
        <div class="create-date">{{page.frontmatter.createAt | date}}</div>
      </div>
      <div class="article-body">
        <h3 class="article-title">
          <router-link :to="page.path">{{page.title || 'No Title'}}</router-link>
        </h3>
        <div class="tag-container">
          <i class="fas fa-tags tag-icon"></i>
          <div v-for="c in page.frontmatter.tags" class="tag" v-on:click="selectTag(c)">{{c}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import isNil from "lodash-es/isNil";

export default {
  name: "Articles",
  props: ["prefix", "count"],
  created() {},
  computed: {
    filteredPages() {
      let articles = this.$site.pages
        .filter(
          page =>
            page.path.includes(this.prefix || "") &&
            !page.path.indexOf("/posts/")
        )
        .filter(page => {
          return (
            this.$route.query.tag == null ||
            page.frontmatter.tags.some(tag => tag === this.$route.query.tag)
          );
        })
        .sort((a, b) => {
          let am = moment(a.frontmatter.createAt);
          let bm = moment(b.frontmatter.createAt);
          if (am.isBefore(bm)) return 1;
          if (am.isSame(bm)) return 0;
          if (am.isAfter(bm)) return -1;
        });

      if (!isNil(this.count) && this.count > 0) {
        articles = articles.slice(0, this.count);
      }
      return articles;
    }
  },
  filters: {
    date: date => {
      if (isNil(date)) return "";
      return moment(date).format("DD");
    },
    month: date => {
      if (isNil(date)) return "";
      return moment(date).format("MMM");
    }
  },
  methods: {
    selectTag(t) {
      console.log("select tag article");
      this.$router.push({ path: "/posts", query: { tag: t } });
    }
  }
};
</script>

<style>
.article-container {
  display: grid;
  grid-template-columns: 45px auto;
  grid-template-areas: "article-date article-body";
  margin-bottom: 6px;
}
.article-date {
  grid-area: article-date;
}

.article-date .create-month {
  font-size: 1em;
}
.article-date .create-date {
  font-size: 1.3em;
}
.article-body {
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
