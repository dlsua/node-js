<template>
  <div>
    <input type="search" name="" id="" @keyup.enter="doSearch" />
    <!-- <input type="search" name="" id="" @keyup="checkEnter"방법이 checkenter방법을 이용하지만
    keyupenter방법은 자동으로 실행함 (methods이용을 따로 안해도 됨).
    /> -->
    <!--  v-on:click 은 @click으로 줄어줌 -->
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log('doSearch 실행')
    },
    checkEnter() {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
