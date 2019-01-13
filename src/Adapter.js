class Adapter {
  static getShows() {
    return fetch('http://api.tvmaze.com/shows').then(res => res.json())
  }

  static getShowEpisodes(showID) {
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`).then(
      response => response.json()
    )
  }
}

export default Adapter
