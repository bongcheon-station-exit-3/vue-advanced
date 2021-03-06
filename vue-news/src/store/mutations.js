export default {
    SET_NEWS_ITEMS(state, news) {
        state.newsItems = news.slice(0, 51);
    },
    SET_JOBS_ITEMS(state, jobs) {
        state.jobsItems = jobs.slice(0, 51);
    },
    SET_ASKS_ITEMS(state, asks) {
        state.asksItems = asks.slice(0, 51);
    },
    SET_NEWS_ELEMENTS(state, element){
        state.newsElements.push(element);
    },
    SET_JOBS_ELEMENTS(state, element){
        state.jobsElements.push(element);
    },
    SET_ASKS_ELEMENTS(state, element){
        state.asksElements.push(element);
    },
}