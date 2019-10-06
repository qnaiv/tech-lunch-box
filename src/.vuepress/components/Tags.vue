<template>
  <div>
    <div
      v-for="tag in getTags"
      v-bind:class="{active: isActive(tag)}"
      class="tag"
      v-on:click="selectTag(tag)"
    >{{tag}}</div>
  </div>
</template>

<script>
import moment from "moment";
import isNil from "lodash-es/isNil";
import uniq from "lodash-es/uniq";

export default {
  name: "Tags",
  props: [],
  computed: {
    getTags() {
      return this.$site.pages
        .filter(page => page.path.includes(this.prefix || ""))
        .filter(page => !page.path.indexOf("/posts/"))
        .flatMap(page => {
          return page.frontmatter.tags;
        })
        .filter(tag => !isNil(tag))
        .filter((elem, index, self) => self.indexOf(elem) === index);
    }
  },
  methods: {
    selectTag(tag) {
      if (this.$route.query.tag === tag) {
        this.$router.push({ query: { tag: null } });
      } else {
        this.$router.push({ query: { tag: tag } });
      }
    },
    isActive(tag) {
      return tag === this.$route.query.tag;
    }
  }
};
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
.tag.active {
  background-color: #3eaf7c;
  color: white;
}
</style>
