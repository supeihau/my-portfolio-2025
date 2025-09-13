import {ref, onMounted, onUnmounted} from 'vue';

export default function UseInnerWidth() {
  const screenWidth = ref(0);
  const isDesktop = ref(true);
  const isPad = ref(true);
  const isMobile = ref(true);

  // onMounted
  onMounted(() => {
    window.addEventListener('resize', resizeWindow);
    resizeWindow();
  });


  // onUnmounted
  onUnmounted(() => {
    window.removeEventListener('resize', resizeWindow);
  });


  // Method
  const resizeWindow = () => {
    if (typeof window !== 'undefined') {
      screenWidth.value = window.innerWidth;
      isDesktop.value = screenWidth.value > 960;
      isPad.value = screenWidth.value <= 960 && screenWidth.value > 600;
      isMobile.value = screenWidth.value <= 600;
    }
  };


  return {
    screenWidth,
    isDesktop,
    isPad,
    isMobile,
  };
}
