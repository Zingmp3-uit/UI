import axios from "axios";

export default class ZingAPI {
    // no params
    async getTop100() {
        let a = await axios.get(`${global.config.API}/top-100`)
        return a.data;
    }
    async getChartHome() {
        let a = await axios.get(`${global.config.API}/chart-home`)
        return a.data;
    }
    async getNewReleaseChart() {
        let a = await axios.get(`${global.config.API}/new-release-chart`)
        return a.data;
    }
    // 1 param
    async getSong(id) {
        let a = await axios.get(`${global.config.API}/song?id=${id}`)
        return a.data;
    }
    async getDetailPlaylist(id) {
        let a = await axios.get(`${global.config.API}/detail-playlist?id=${id}`)
        return a.data;
    }
    async getHome(id) {
        let a = await axios.get(`${global.config.API}/home?id=${id}`)
        return a.data;
    }
    async getInfoSong(id) {
        let a = await axios.get(`${global.config.API}/song-info?id=${id}`)
        return a.data;
    }
    async getArtist(name) {
        let a = await axios.get(`${global.config.API}/artist?name=${name}`)
        return a.data;
    }
    async getLyric(id) {
        let a = await axios.get(`${global.config.API}/lyric?id=${id}`)
        return a.data;
    }
    async search(name) {
        let a = await axios.get(`${global.config.API}/search?name=${name}`)
        return a.data;
    }
    async getCategoryMV(id) {
        let a = await axios.get(`${global.config.API}/category-mv?id=${id}`)
        return a.data;
    }
    async getVideo(id) {
        let a = await axios.get(`${global.config.API}/video-mv?id=${id}`)
        return a.data;
    }
    // 3 params
    async getListMV(id, page, count) {
        let a = await axios.get(`${global.config.API}/list-mv?id=${id}&page=${page}&count=${count}`)
        return a.data;
    }
}