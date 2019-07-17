<template>
  <div>
    <div v-for="tag in getTags" class="tag">{{tag}}</div>
  </div>
</template>

<script>
// import moment from "moment";
// import isNil from "lodash-es/isNil";
// import uniq from "lodash-es/uniq";

// export default {
//   name: "Tags",
//   props: ["pages"],
//   computed: {
//     getTags() {
//       return this.pages
//         .filter(page => page.path.includes(this.prefix || ""))
//         .filter(page => !page.path.indexOf("/posts/"))
//         .flatMap(page => {
//           return page.frontmatter.tags;
//         })
//         .filter(tag => !isNil(tag))
//         .filter((elem, index, self) => self.indexOf(elem) === index);
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
