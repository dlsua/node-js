<template>
  <div>
    <input type="radio" name="" id="ai" v-model="favorite" value="AI" />
    <label for="ai">인공지능</label>
    <input type="radio" name="" id="blockchain" v-model="favorite" value="BC" />
    <label for="blockchain">블록체인</label>
    <input type="radio" name="" id="iot" v-model="favorite" value="IOT" />
    <label for="iot">사물인터넷</label>
    <input type="radio" name="" id="other" v-model="favorite" value="OTH" />
    <label for="other">기타</label>
    <div v-if="favorite === 'OTH'">
      <!-- if와 show의 차이를 분명히 알아둘 것.
      if는 관리자 같은 경우에 쓰이고 show는 설정란 같이 클릭하면 보이는 곳에 쓰이는 경우가 좋음
      -->
      <input type="text" name="" id="" v-model="otherValue" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favorite: '',
      otherValue: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
