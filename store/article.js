export const state = () => ({
  articleList: []
});

export const getters = {
  getDetailById: state => id => {
    return state.articleList.find(article => article.id == id);
  }
};

export const mutations = {
  setArticleList(state, articleList) {
    state.articleList = articleList;
  },

  updateArticle(state, newArticle) {
    this.$router.push("/article/");
    state.articleList = state.articleList.map(article =>
      article.id === newArticle.id ? newArticle : article
    );
  },

  removeArticle(state, id) {
    state.articleList = state.articleList.filter(article => article.id != id);
  },

  addArticle(state, article) {
    const lastId =
      state.articleList.length > 0
        ? state.articleList[state.articleList.length - 1].id
        : 0;
    const id = lastId + 1;
    const newArticle = { ...article, id };
    state.lists.push(newArticle);
  }
};

export const actions = {
  async getArticleList({ commit }) {
    const articleList = await this.$axios.$get(
      "https://60011cb008587400174da653.mockapi.io/api/v1/articles"
    );
    commit("setArticleList", articleList);
  },

  async addArticle({ commit }, article) {
    await this.$axios.$post(
      "https://60011cb008587400174da653.mockapi.io/api/v1/articles",
      article
    );
    commit("addArticle", article);
  },

  async removeArticle({ commit }, id) {
    await this.$axios.$delete(
      `https://60011cb008587400174da653.mockapi.io/api/v1/articles/${id}`
    );
    commit("removeArticle", id);
  },

  async updateArticle({ commit }, newArticle) {
    console.log(newArticle);
    await this.$axios.$put(
      `https://60011cb008587400174da653.mockapi.io/api/v1/articles/${newArticle.id}`,
      newArticle
    );
    commit("updateArticle", newArticle);
  }
};
