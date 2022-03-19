<template>
  <div>
    <div>
      <input
        type="checkbox"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="css"
        value="CSS"
        v-model="favoriteLang"
      />
      <label for="css">CSS</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="js"
        value="JS"
        v-model="favoriteLang"
      />
      <label for="js">JS</label>
    </div>
    <div>선택한 지역: {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
// 41번 favoriteLang:  [] : 배열을 넣어줌 || {} : boolean
// checkbox와 radio 버튼에서 같은 코드지만 결과는 다름.
// radio에서는 favoriteLang : [] 부분이 상관없이 하나의 값만 정해졌지만 checkbox에선 다르게 나옴.
</script>
