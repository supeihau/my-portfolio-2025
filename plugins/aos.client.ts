import AOS from 'aos';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: 'ease-out-cubic',
    })
  })

  nuxtApp.hook('page:finish', () => {
    AOS.refresh()
  })
})