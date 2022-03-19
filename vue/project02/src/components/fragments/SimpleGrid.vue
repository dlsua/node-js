<template>
  <div>
    <div class="text-end" v-if="enableExcelDownload">
      <button class="btn btn-primary" @click="doExcel">엑셀다운로드</button>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
          <th :key="th.key" v-for="th in headers">{{ th.title }}</th>
          <!--key값을 받고 for문을 th에서 headers를 돌림. th는 th내에서 돌리기 때문에 고정값임.
          for문의 데이터는 th의 title을 넣음 title은 attridute에 해당됨.
           -->
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items">
          <!-- key을 i로 무작위로 돌림
           다수의 정보는 i로 돌림. item값을 불러옴.
           -->
          <td v-if="selectType === 'radio'">
            <input
              type="radio"
              name=""
              id=""
              :value="item[checkedKey]"
              v-model="checkedItem"
              @change="doSelect"
            />
          </td>
          <td v-else-if="selectType === 'checkbox'">
            <input
              type="checkbox"
              name=""
              id=""
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doSelect"
            />
          </td>
          <td :key="th.key" v-for="th in headers">{{ item[th.key] }}</td>
          <!-- th내에 key값을 돌림
          listView에서 brinList에서 배열로 return 값을 정해줌.
          drinkList: [] 배열의 모든 요소에 key값이 정해줌
          tr은 테두리이고 내부 td는 따로 넣어줌
           tuple에서 해당되는 부분.
        @change event가 발생할 때마다 doselect가 발생 : 양방향 데이터
          -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    changeEventName: {
      type: String,
      default: 'change-item'
    },
    enableExcelDownload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkedItem: '',
      checkedItems: [],
      sampleData: 'A'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSelect() {
      if (this.selectType === 'radio') {
        this.$emit(this.changeEventName, this.checkedItem)
      } else if (this.selectType === 'checkbox') {
        this.$emit(this.changeEventName, this.checkedItems)
        // $emit : 글로벌 함수 부모 페이지에 $emit 같은 이름에 값을 넘김
      }
    },
    doPrint() {
      console.log('doPrint 함수 호출')
      console.log(this.sampleData)
    },
    doExcel() {}
  }
}
</script>
