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
        <el-input v-model="ruleForm.state" value=""></el-input>
      </el-form-item>
      <el-form-item label="City" prop="city">
        <el-input v-model="ruleForm.city"></el-input>
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="addEmployee">Add</el-button>
        <el-button @click="$router.push('/employees/employeeform')"
          >Cancel</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "EmployeeForm",
  data() {
    return {
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
        ],
      },
    };
  },
  methods: {
    addEmployee() {
      const e = this.rules;
      if (
        e.name[0].required == false ||
        e.state[0].required == false ||
        e.city[0].required == false ||
        e.address[0].required == false
      ) {
        return alert("Error Input");
      }
      this.$store.commit("employee/addEmployee", this.ruleForm);
    },
    computed: {
      ...mapState("employee", {
        dataLists: (state) => state.lists,
      }),
    },
  },
};
</script>

<style scoped>
.employeeForm {
  max-width: 50%;
  align-items: center;
  margin: 25px auto;
}
</style>
