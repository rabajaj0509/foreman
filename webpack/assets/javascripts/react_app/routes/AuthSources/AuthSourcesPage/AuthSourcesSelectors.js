export const selectAuthSource = state => state.authsources || {};
export const selectResults = state => selectAuthSource(state).results || [];
export const selectHost = state =>
  selectResults(state)[0] && selectResults(state)[0].host;
