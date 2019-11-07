<template>
  <div class="margin-shift" v-list:cyan="'wide'">
    <h3>{{title}}</h3>
    <div v-if="blogs.length>0">
      <div class="card" v-bind:key="blog.id" v-for="blog in blogs">
        <div class="card-body">
          <h5 class="card-title" v-format>{{blog.title | makeUpperCase}}</h5>
          <p class="card-text">{{blog.body | contentSnippet}}</p>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-else>{{error}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "List Blog",
      blogs: [],
      error: null
    };
  },
  methods: {},
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(
      data => {
        this.blogs = data.body.slice(0, 5);
      },
      () => {
        this.error = "Opps!! something went wrong, please review again.";
      }
    );
  }
  //   filters: {
  //     makeUpperCase: function(value) {
  //       if (!value) return "";
  //       return value.charAt(0).toUpperCase() + value.slice(1);
  //       //   return value.toUpperCase();
  //     },
  //     contentSnippet: function(value) {
  //       return value.slice(0, 70) + "...";
  //     }
  //   }
};
</script>

<style  scoped>
.margin-shift {
  margin: 50px;
}
</style>