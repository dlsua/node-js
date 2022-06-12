export default {
  methods: {
    // 날짜
    // 한국은 2022.03.15
    // 2022-03-15
    // 2022/03/15
    // 미국은 Mar 15, 2022
    // 유럽은 15.05.2022
    // d = '20220315', f = 'YYYY.MM.DD'
    // new Date()
    $convertDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''

      if (typeof d === 'string') {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = d.getDate().toString().padStart(2, 0)
      }

      // f = 'YYYY.MM.DD', YYYY/MM/DD, DD.MM.YYYY
      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    },
    // 금액에 대한 포맷
    // 3500
    // 3500.1
    // 한국 3,500
    // 미국 $3,500.00
    // 유럽 3.500,00
    // '3500', '#,###' -> 3,500
    // 3500, '#.###' -> 3.500
    // 3500.1, '$#,###.00' -> $3,500.10
    // 3500.1, '#,###.##' -> 3,500.1
    // 3500.1, '#.###,##' -> 3.500,1
    // 1250.12, '#,###.##%' -> 1,250.12%
    // -3500, '#,###' -> -3,500
    // substr(start, end) start다음 부분부터 end까지 추출 0부터면 1부터 시작. 12345추출하려면 0부터
    $convertNumberFormat(amount, format) {
      let currencySymbol = ''
      let lastSymbol = ''

      if (format.substr(0, 1) !== '#') {
        currencySymbol = format.substr(0, 1)
      }
//나라마다의 금액 단위에 대한 심볼을 추출 $ 원 위안 등등

      if (format.slice(-1) !== '#' && format.slice(-1) !== '0') {
        lastSymbol = format.slice(-1)
        format = format.substring(0, -1)
      }
//마지막이 #이나 0이 아닌 경우의 수, ex로 % 같은 경우가 해당 이외에 다른 것을 하고 싶으면 &&로 추가함.

      let groupingSeparator = '' // 숫자 3자리마다 구분자 , 혹은 .
      let decimalSeparator = '' // 소수점 구분자 , 혹은 .
      let maxFractionDigits = 0 // 소수점 몇자리까지 표기할건지

      if (format.indexOf('.') === -1) {
        // #,###    단위에 .즉 소수점이 없을 경우 ,만 사용
        groupingSeparator = ','
      } else if (format.indexOf(',') === -1) {
        // #.###    단위에 ,만 사용
        groupingSeparator = '.'
      } else if (format.indexOf(',') < format.indexOf('.')) {
        // #,###.##
        groupingSeparator = ','
        decimalSeparator = '.'
        maxFractionDigits = format.length - format.indexOf('.') - 1
          //format.length(전체 금액)에서 format.indexOf('.') 소수점에서 자리에서 빼고 -1로 해줌으써 남은 소수점 파악
          // lengh는 1부터 시작, indexof는 0부터 시작이므로 수에서 1이 차이나기 때문에 -1을 해주는 것임.
      } else {
        // #.###,##
        groupingSeparator = '.'
        decimalSeparator = ','
        maxFractionDigits = format.length - format.indexOf(',') - 1
      //위의 반대,(유럽식 단위 계산)
      }

      let sign = '' // amount가 음수로 들어왔을 때
      let dec = 1
      for (let i = 0; i < maxFractionDigits; i++) {
        // dec = 10, i=1
        dec = dec * 10
        // dec = 100
      }
      // dec = 1000

      // amount = -3500 * 100 = 350000 / 100 = -3500.00
      // format = #,###.#0
      let v = String(Math.round(parseFloat(amount) * dec) / dec) // '-3500.00'

      if (v.startsWith('-')) {
        sign = '-'
        v = v.substring(1) // '3500.00'
      }

      if (maxFractionDigits > 0 && format.slice(-1) === '0') {
        v = parseFloat(v).toFixed(maxFractionDigits)
      }

      let d = '' // 소수점 이하 값만
      if (maxFractionDigits > 0 && v.indexOf('.') > -1) {
        d = v.substring(v.indexOf('.')) // .00
        d = d.replace('.', decimalSeparator) // .00 -> ,00
        v = v.substring(0, v.indexOf('.')) // 3500
      }

      const regexp = /(\d+)(\d{3})/

      // v = 3524500

      while (regexp.test(v)) {
        // $1 = 3524, $2 = 500
        // v = 3524,500

        // $1 = 3, $2 = 524
        // v = 3,524,500
        v = v.replace(regexp, '$1' + groupingSeparator + '$2')
      }

      return sign + currencySymbol + String(v) + String(d) + lastSymbol
    }
  }
}
