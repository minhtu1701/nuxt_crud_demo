export const state = () => ({
  articleList: []
});

export const mutations = {
  setArticleList(state, articleList) {
    state.articleList = articleList;
  },

  updateArticle(state, newArticle) {
    state.articleList = state.articleList.map(article =>
      article.id === newArticle.id ? newArticle : article
    );
  },

  removeArticle(state, index) {
    state.articleList = state.articleList.filter(
      article => article.id != index
    );
  },

  addArticle(state, article) {
    state.lists.push(article);
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
    await this.$axios.$put(
      `https://60011cb008587400174da653.mockapi.io/api/v1/articles/${newArticle.id}`,
      newArticle
    );
    commit("updateArticle", newArticle);
  }
};
