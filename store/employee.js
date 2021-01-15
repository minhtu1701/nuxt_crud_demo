export const state = () => ({
  lists: [
    {
      id: 1,
      name: "Tom",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 123456789
    },
    {
      id: 2,
      name: "Tim",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 987654321
    },
    {
      id: 3,
      name: "Tan",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 987654321
    },
    {
      id: 4,
      name: "Tuan",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 987654321
    },
    {
      id: 5,
      name: "Tu",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 987654321
    },
    {
      id: 6,
      name: "Tom",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 123456789
    },
    {
      id: 7,
      name: "Tim",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 987654321
    },
    {
      id: 8,
      name: "Tan",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 987654321
    },
    {
      id: 9,
      name: "Tuan",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 987654321
    },
    {
      id: 10,
      name: "Tu",
      state: "California",
      city: "Los Angeles",
      address: "No. 189, Grove St, Los Angeles",
      phone: 987654321
    }
  ]
});

export const getters = {
  getList: state => state.lists,
  getDetailById: state => id => {
    return state.lists.find(employee => employee.id == id);
  }
};

export const mutations = {
  addEmployee(state, employee) {
    const lastId =
      state.lists.length > 0 ? state.lists[state.lists.length - 1].id : 0;
    const id = lastId + 1;
    const newEmployee = { ...employee, id };
    state.lists.push(newEmployee);
    // this.$router.push("/employees");
  },

  removeEmployee(state, index) {
    state.lists = state.lists.filter(employee => employee.id != index);
  },

  updateEmployee(state, updatedEmployee) {
    state.lists = state.lists.map(employee =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
  }
};
