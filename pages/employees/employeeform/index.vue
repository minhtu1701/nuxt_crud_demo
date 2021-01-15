<template>
  <div class="employeeForm">
    <el-form
      ref="ruleform"
      :rules="rules"
      :model="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="State" prop="state">
        <el-input v-model="ruleForm.state"></el-input>
      </el-form-item>
      <el-form-item label="City" prop="city">
        <el-input v-model="ruleForm.city"></el-input>
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="addEmployee('ruleform')"
          >Add</el-button
        >
        <el-button v-on:click="handleCancelClick">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "EmployeeForm",
  data() {
    return {
      ruleForm: {
        state: "",
        name: "",
        city: "",
        address: "",
        phone: "",
      },
      rules: {
        name: [
          { required: true, message: "Please input name", trigger: "blur" },
        ],
        state: [
          { required: true, message: "Please input state", trigger: "blur" },
        ],
        city: [
          { required: true, message: "Please input city", trigger: "blur" },
        ],
        address: [
          { required: true, message: "Please input address", trigger: "blur" },
        ],
        phone: [
          {
            required: true,
            message: "Please input phone number",
            trigger: "blur",
          },
          {
            type: "number",
            message: "Phone must be a number",
          },
        ],
      },
    };
  },
  methods: {
    addEmployee(ruleform) {
      this.$refs[ruleform].validate((rules) => {
        if (rules) {
          this.$store.commit("employee/addEmployee", this.ruleForm);
          alert("Employee added");
          this.ruleForm.name = "";
          this.ruleForm.state = "";
          this.ruleForm.city = "";
          this.ruleForm.address = "";
          this.ruleForm.phone = "";
        } else {
          alert("error add");
          return false;
        }
      });
    },
    handleCancelClick() {
      this.ruleForm.name = "";
      this.ruleForm.state = "";
      this.ruleForm.city = "";
      this.ruleForm.address = "";
      this.ruleForm.phone = "";
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