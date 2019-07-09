interface MainState {
  drawn: boolean
}

export const state = (): MainState => ({
  drawn: false
})

export const mutations = {
  toggle(state: MainState) {
    state.drawn = !state.drawn
  }
}
