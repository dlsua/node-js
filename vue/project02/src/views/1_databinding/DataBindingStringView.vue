<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <h1>Hello {{ userName2 }}</h1>
    <p>{{ userName }}</p>
   <!-- 요소에 효과적용 {{}}로 바인딩. -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'Sangyong Lee',
      userName2: 'Roode'
    }
  }
}
</script>
<style scoped></style>
