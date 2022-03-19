<template>
  <div>
    view부분 페이지 한 줄만 뜨는 이유는 메인 페이지이기 때문에 하나만 뜸
    <br />
    <br />
    <!-- <h3 class="page-title">feoeof</h3> -->
    <!-- 부모 페이지 -->
    <a-title title="고객조회(부모view1)" :title2="title2" :list="list" />
    <br />
    <br />
    <br />
    <a-title title="고객조회2(부모view2)" :title2="title2" :list="list" />
    <br />
    <br />
    <br />
    <a-title title="고객조회3(부모view3)" />
    <!-- components: { 'a(page)-title(이름이 같이야함)': PageTitle }, 부분
    데이터를 component에 넘기고 component에서 받아와서 값을 넣음.
    컴포넌트에서 받아올 때 자유도 높은 코드를 작성할 수 있음.

    title만 있는데 왜 전부 값을 가져오게 되는 것인가?
    -->
  </div>
</template>
<script>
import PageTitle from '@/components/fragments/PageTitle.vue'
export default {
  components: { 'a-title': PageTitle },
  data() {
    return {
      title2: '고객리스트를 조회하는 화면',
      list: [1, 2, 3, 4]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
