<template>
  <div>
    <h3>Blog</h3>

    <form method="post">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          v-focus
          type="text"
          v-model.lazy="blog.title"
          class="form-control"
          id="title"
          placeholder="Enter Title"
          autocomplete="off"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          v-model.lazy="blog.description"
          class="form-control"
          id="description"
          placeholder="Enter Description"
          autocomplete="off"
        />
      </div>
      <button type="button" @click.prevent="postBlog" class="btn btn-primary">Submit</button>
    </form>
    <div id="details-preview">
      <h3>Blog Details:</h3>
      <p>Name: {{blog.title}}</p>
      <p>Description: {{blog.description}}</p>
      <p>User: {{blog.user}}</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        description: "",
        user: ""
      }
    };
  },
  methods: {
    postBlog: function() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.description,
          userId: this.blog.user
        })
        .then(
          function(data) {
            console.log("DATA", data);
          },
          function(error) {
            console.log("ERROR", error);
          }
        );
    }
  }
};
</script>

<style scoped>
#margin-shift {
  margin-left: 20%;
}
</style>