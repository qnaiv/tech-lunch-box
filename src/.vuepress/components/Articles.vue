<template>
  <div>
    <div v-for="page in filteredPages" class="article-container" v-if="!page.frontmatter.exclude">
      <div class="article-date">
        <div class="create-month">{{page.frontmatter.createAt | createMonth}}</div>
        <div class="create-date">{{page.frontmatter.createAt | createDate}}</div>
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
// import moment from "moment";
// import isNil from "lodash-es/isNil";

// export default {
//   name: "Articles",
//   props: ["pages", "prefix", "count"],
//   created() {
//     console.log("aa");
//     console.log(this);

//   },
//   computed: {
//     filteredPages() {
//       let articles = this.pages
//         .filter(
//           page =>
//             page.path.includes(this.prefix || "") &&
//             !page.path.indexOf("/posts/")
//         )
//         .sort((a, b) => {
//           let am = moment(a.frontmatter.createAt);
//           let bm = moment(b.frontmatter.createAt);
//           if (am.isBefore(bm)) return 1;
//           if (am.isSame(bm)) return 0;
//           if (am.isAfter(bm)) return -1;
//         });
//       console.log(this.count);

//       if (!isNil(this.count) && this.count > 0) {
//         articles = articles.slice(0, this.count);
//       }
//       return articles;
//     }
//   },
//   filters: {
//     createDate: date => {
//       if (isNil(date)) return "";
//       return moment(date).format("DD");
//     },
//     createMonth: date => {
//       if (isNil(date)) return "";
//       return moment(date).format("MMM");
//     }
//   }
// };
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
