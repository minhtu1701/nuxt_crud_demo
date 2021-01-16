<template>
  <div class="employeeForm">
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
        <el-button type="primary" v-on:click="addArticle('ruleForm')"
          >Add</el-button
        >
        <el-button v-on:click="handleCancelClick">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
          { required: true, message: "Please input state", trigger: "blur" },
        ],
        title: [
          { required: true, message: "Please input city", trigger: "blur" },
        ],
        description: [
          { required: true, message: "Please input address", trigger: "blur" },
        ],
        content: [
          {
            required: true,
            message: "Please input phone number",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    addArticle(ruleForm) {
      this.$refs[ruleForm].validate((rules) => {
        if (rules) {
          this.$store.dispatch("article/addArticle", this.ruleForm);
          alert("You added an article");
          this.ruleForm.createdAt = "";
          this.ruleForm.title = "";
          this.ruleForm.description = "";
          this.ruleForm.content = "";
        } else {
          alert("error add");
          return false;
        }
      });
    },

    handleCancelClick() {
      this.$router.push("/article/");
    },
  },
};
</script>

<style >
.employeeForm {
  max-width: 50%;
  align-items: center;
  margin: 25px auto;
  height: 100%;
}
</style>