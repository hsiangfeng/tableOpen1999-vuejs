const app = new Vue({
  el: '#app',
  data: {
    dataOpen1999: [],
    GooglemapUrl: 'https://www.google.com/maps/dir/',
    distance: '20z',
    sortName: 'zipcode_',
    sortOrder: false
  },
  methods: {
    dataGet: function () {
      const _url = 'https://soweb.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery?startdate=&enddate='
      window.fetch(_url, { methods: 'get' }).then(data => {
        return data.json()
      }).then(item => {
        this.dataOpen1999 = item.splice(0, 50)
      }).catch(error => {
        window.alert('錯誤訊息:' + error)
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
    }
  },
  created () {
    this.dataGet()
  }
})
