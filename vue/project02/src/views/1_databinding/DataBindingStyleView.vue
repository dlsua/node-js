<template>
  <div>
    <div :style="style1">스타일 바인딩:글씨는 red, 폰트크기:30px</div>
    <div :style="style2">스타일 바인딩:글씨는 red, 폰트크기:30px</div>
    <button @click="style2.color = 'blue'">색상바꾸기</button>
    <!-- style 적용에서 문자열은 안 고친다는 생각으로 선언하며, object, key로 선언하면 유기적으로 바꿀 수 있음 -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: 'color: red; font-size: 30px',
      style2: {
        color: 'red',
        fontSize: '30px'
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
