<template>
  <div>
    <el-table :data="dataLists" style="width: 80%" class="employeeTable">
      <el-table-column fixed prop="id" label="ID" width="150">
      </el-table-column>
      <el-table-column prop="name" label="Name" width="120"> </el-table-column>
      <el-table-column prop="state" label="State" width="120">
      </el-table-column>
      <el-table-column prop="city" label="City" width="120"> </el-table-column>
      <el-table-column prop="address" label="Address" width="300">
      </el-table-column>
      <el-table-column prop="phone" label="Phone" width="300">
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="160">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            v-on:click="$router.push('/employees/edit/' + scope.row.id)"
            >Edit</el-button
          >
          <el-button
            type="text"
            size="small"
            v-on:click="removeEmployee(scope.row.id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "EmployeeTable",
  data() {
    return {
      editing: null,
    };
  },
  methods: {
    removeEmployee(id) {
      this.$confirm(
        "This will permanently delete the employee. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelBunttonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.$store.commit("employee/removeEmployee", id);
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
  computed: {
    ...mapState("employee", {
      dataLists: (state) => state.lists,
    }),
  },
};
</script>

<style scoped>
* {
  margin: 0px auto;
  padding: 0px;
  background-color: white;
}
.employeeTable {
  height: 100vh;
}
</style>