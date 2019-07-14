<template>
    <main class="content">
    <div class="page-title">
        <h4>Заказ</h4>
        <router-link to="/cart" class="waves-effect btn grey darken-1 modal-trigger" data-target="explore-order">
            Корзина заказов
        </router-link>
    </div>


    <div class="frow order-row">

        <router-link to="/order-position" v-for="post in categories" :key="post.id" class="card waves-effect pointer">
            <div class="center">
                <img :src="post.image" style="height: 200px;width: 300px;margin:10px" class="responsive-img order-img">
            </div>
            <div class="card-content center p10">
                <h5 class="m0">{{post.name}}</h5>
            </div>
        </router-link>


    </div>

</main>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
      errors: []
    }
  },
  created() {
      axios.get('/categories')
      .then(response=>{
          this.categories = response.data
      })
        .catch(e => {
        this.errors.push(e)
    }) 
  },
}

</script>