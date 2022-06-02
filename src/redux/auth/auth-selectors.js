const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsRefreshing = state => state.auth.isRefreshing

const getIsLoading = state => state.auth.isLoading

const getIsRegected = state => state.auth.isRegected

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshing,
  getIsLoading,
  getIsRegected
};
export default authSelectors;