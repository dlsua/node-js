<template>
  <div>
    <h1>
      {{ $translate(`${lang}.welcome`, userInfo) }}
    </h1>
    <h1>{{ $translate(`${lang}.hi`) }}</h1>
    <button>{{ $translate(`${lang}.search`) }}</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      lang: 'ko',
      name: 'Seungwon Go',
      userInfo: {
        name: 'Seungwon Go',
        email: 'seungwon.go@gmail.com',
        lang: 'en'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
