var app = new Vue({
    el: '#app',
    data: {
        dataOpen1999: '' || [],
        GooglemapUrl: 'https://www.google.com/maps/dir/',
        distance: '20z',
        sortName: '',
        sortOrder: false,
    },
    methods: {
        dataGet: function () {
            const _url = 'https://soweb.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery?startdate=&enddate=';
            fetch(_url, { methods: 'get' }).then(data => {
                return data.json();
            }).then(item => {
                this.dataOpen1999 = item.splice(0, 50);
            }).catch(error => {
                console.log(error);
            })
        },

    },
    computed: {
        dataSort: function () {
            var vm = this;
            if (vm.sortOrder) {
                return vm.dataOpen1999.sort( (a, b) => {
                    return a[vm.sortName] > b[vm.sortName];
                })
            } else if (!vm.sortOrder) {
                return vm.dataOpen1999.sort( (a, b) => {
                    return a[vm.sortName] < b[vm.sortName];
                })
            }
        }
    },
    created() {
        this.dataGet();
    }
})