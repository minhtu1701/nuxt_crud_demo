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
    this.$axios.$put(
      `https://60011cb008587400174da653.mockapi.io/api/v1/articles/${newArticle.id}`,
      newArticle
    );
    state.articleList = state.articleList.map(article =>
      article.id === newArticle.id ? newArticle : article
    );
  },

  removeArticle(state, id) {
    this.$axios.$delete(
      `https://60011cb008587400174da653.mockapi.io/api/v1/articles/${id}`
    );
    state.articleList = state.articleList.filter(article => article.id != id);
  }
};

export const actions = {
  async getArticleList({ commit }) {
    const articleList = await this.$axios.$get(
      "https://60011cb008587400174da653.mockapi.io/api/v1/articles"
    );
    commit("setArticleList", articleList);
  },

  addArticle({ commit }, article) {
    this.$axios.$post(
      "https://60011cb008587400174da653.mockapi.io/api/v1/articles",
      article
    );
  }
};
