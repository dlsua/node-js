<template>
  <div>
    <input type="text" name="" id="id" v-model.trim="userId" />
    <!--trim 문자열 좌우에서 공백을 제거하는 함수가 trim() 함수 입니다.  -->

    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
    <br />
    <input type="number" name="" id="" v-model="num1" />+
    <input type="number" name="" id="" v-model="num2" />=
    <span>{{ num1 + num2 }}</span>
    <!-- <button @click="calculate">계산</button>
    <span>{{ sum }}</span> script에서 sum이 계산되고 값이 나옴 -->
    <br />
    <input type="text" name="" id="" v-model.number="num3" />+
    <input type="text" name="" id="" v-model.number="num4" />=
    <span>{{ num3 + num4 }}</span>
    <br />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'Lsy',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      sum: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'SangYong'
    },
    calculate() {
      this.sum = this.num1 + this.num2
    }
  }
}
</script>
