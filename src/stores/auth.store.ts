import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null
  }),
  getters: {
    getHash: (state) => state.user
  },
  actions: {
    check() {
      return true
    }
  }
})
