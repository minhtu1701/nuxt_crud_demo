<template>
  <div class="articleForm">
    <el-form
      ref="ruleForm"
      :rules="rules"
      :model="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="CreatedAt" prop="createdAt">
        <el-input v-model="ruleForm.createdAt"></el-input>
      </el-form-item>
      <el-form-item label="Title" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="Content" prop="content">
        <el-input v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="updateArticle"
          >Update Employee</el-button
        >
        <el-button v-on:click="handleCancelClick">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      ruleForm: {
        createdAt: "",
        title: "",
        description: "",
        content: "",
      },
      rules: {
        createdAt: [
          {
            required: true,
            message: "Please input CreatedAt",
            trigger: "blur",
          },
        ],
        title: [
          { required: true, message: "Please input Title", trigger: "blur" },
        ],
        description: [
          {
            required: true,
            message: "Please input Description",
            trigger: "blur",
          },
        ],
        content: [
          { required: true, message: "Please input Content", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    detail() {
      return this.$store.getters["article/getDetailById"](
        this.$route.params.id
      );
    },
  },
  watch: {
    detail: {
      handler() {
        console.log("detail has changed", this.detail);
        this.ruleForm = { ...this.detail };
      },
      immediate: true,
    },
    // detail(newValue, oldValue) {
    //   console.log(newValue, oldValue);
    //   this.ruleForm = { ...newValue };
    // },
  },
  methods: {
    updateArticle() {
      this.$confirm(
        "This will permanently update the article. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelBunttonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.$store.dispatch("article/updateArticle", this.ruleForm);
          this.$message({
            type: "success",
            message: "Update completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Update canceled",
          });
        });
    },

    handleCancelClick() {
      this.$router.push("/article/");
    },
  },
};
</script>

<style scoped>
.articleForm {
  max-width: 50%;
  align-items: center;
  margin: 25px auto;
}
</style>
