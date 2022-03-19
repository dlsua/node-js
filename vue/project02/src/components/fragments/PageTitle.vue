<template>
  <div>
    <h3>
      {{ title }}부분component<br />
      <small>({{ title2 }})</small>
    </h3>
    <div>{{ list }} conponent2부분</div>
  </div>
  <!-- props : properties 부모(pageView)에서 받는 값만, 정리함.
  array와 object는 return 값만 전달함.
  -->
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: 'type이 제대로 전달이 안됐을 경우 : 페이지 제목'
    },
    title2: {
      type: String,
      default: ''
    },
    num1: {
      type: Number,
      default: 0
    },
    isBoolean: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
