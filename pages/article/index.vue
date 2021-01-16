<template>
  <el-table :data="articlelist" class="articlelist">
    <el-table-column prop="createdAt" label="CreatedAt" width="auto">
    </el-table-column>
    <el-table-column prop="title" label="Title" width="auto"> </el-table-column>
    <el-table-column prop="description" label="Description" width="auto">
    </el-table-column>
    <el-table-column prop="content" label="Content" width="auto">
    </el-table-column>
    <el-table-column fixed="right" label="Operations" width="auto">
      <template slot-scope="scope">
        <el-button
          type="text"
          size="small"
          v-on:click="$router.push(`/article/edit/${scope.row.id}`)"
          >Edit</el-button
        >
        <el-button
          type="text"
          size="small"
          v-on:click="removeArticle(scope.row.id)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("article", {
      articlelist: (state) => state.articleList,
    }),
  },

  async fetch({ store }) {
    await store.dispatch("article/getArticleList");
  },

  methods: {
    removeArticle(id) {
      this.$confirm(
        "This will permanently delete the Articile. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelBunttonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.$store.commit("article/removeArticle", id);
          this.$message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },

    editEmployee(employee) {
      console.log(dataLists);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0px auto;
  padding: 0px;
  background-color: white;
}

.articlelist {
  height: 100%;
  width: 80%;
  padding: 0px 100px;
}
</style>