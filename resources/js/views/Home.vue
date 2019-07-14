<template>
  <div>
    <div class="page-title">
      <button class="btn waves-effect waves-light btn-small">
      <i class="material-icons">refresh</i>
      </button>
      <h4>
          Обзор за вчера <span></span>
          <i class="material-icons black-text pointer" id="dashboard-info">info_outline</i>
      </h4>
    </div>

    <Loader v-if="loading"/>

    <div v-else class="row">
      <HomeIncome />
      <HomeOrders />
      <div class="page-title"></div>
      <HomeBill />
    
    </div>
</div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
import HomeIncome from '@/components/HomeIncome'
import HomeOrders from '@/components/HomeOrders'

export default {
  name: 'home',
  data: () => ({
    loading: true,
  }),
  async mounted() {
    this.currency=await this.$store.dispatch('fetchCurrency')
    console.log(this.currency)
    this.loading=false
  },
  components: {
    HomeIncome, HomeOrders,
    HomeBill
  }
}
</script>
