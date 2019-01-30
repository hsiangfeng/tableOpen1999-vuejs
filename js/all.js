const app = new Vue({
  el: '#app',
  data: {
    dataOpen1999: [],
    GooglemapUrl: 'https://www.google.com/maps/dir/',
    distance: '20z',
    sortName: 'ZipName_',
    sortOrder: false,
    page: '',
    quantity: 5,
    pagenumber: 0
  },
  methods: {
    dataGet: function () {
      const _url = 'https://soweb.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery?startdate=&enddate='
      window.fetch(_url, { methods: 'get' }).then(data => {
        return data.json()
      }).then(item => {
        this.page = item.splice(0, 10).length
        this.dataOpen1999 = item.splice(0, this.quantity)
      }).catch(error => {
        console.log('錯誤訊息' + error)
      })
    }
  },
  computed: {
    dataSort: function () {
      if (this.sortOrder) {
        return this.dataOpen1999.sort((a, b) => {
          return a[this.sortName] > b[this.sortName]
        })
      } else if (!this.sortOrder) {
        return this.dataOpen1999.sort((a, b) => {
          return a[this.sortName] < b[this.sortName]
        })
      }
    },
    dataPage: function () {
      let vm = this
      this.dataOpen1999 = vm.dataOpen1999.splice(this.pagenumber, this.quantity)
    }
  },
  created () {
    this.dataGet()
  },
  beforeMount () {
    this.dataSort()
  }
})
