<template>
    <!-- <div class="row s12 l12">
        <a class="waves-effect waves-light btn" href="">
            Корзина ({{ $store.state.cartCount }})
        </a>

        <div v-if="$store.state.cart.length > 0" class="">
            <table class="highlight col s3 l3">
            <td v-for="posit in $store.state.cart"
                :key="posit.id"
                class="navbar-item"
                href=""
            >
                {{ posit.namepost }} x{{ posit.quantity }} = ${{ posit.totalPrice }}
            </td>
            </table>
            <a class="navbar-item" href="">
                Итого: ${{ totalPrice }}
            </a>

            <hr class="navbar-divider">

            <a class="navbar-item" href="">
                К оплате
            </a>
        </div>

        <div v-else class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" href="">
                Корзина пуста
            </a>
        </div> -->

<table class="highlight">
        <a class="waves-effect waves-light btn" href="">
            Корзина ({{ $store.state.cartCount }})
        </a>
        <thead>
        <tr>
            <th>Название</th>
            <th>Количество</th>
            <th>Стоимость</th>
            <th></th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="posit in $store.state.cart"
            :key="posit.id"
            class="navbar-item"
             href="">
             
            <td>{{ posit.namepost }}</td>
            <td>{{ posit.quantity }}</td>
            <td>{{ posit.totalPrice }}</td>
            <span class="removeBtn"
                title="Удалить из корзины"
                @click.prevent="removeFromCart(posit)">X</span>
        </tr>
        <a class="navbar-item" href="">
                Итого: ${{ totalPrice }}
            </a>
        
        </tbody>
    </table>
        
    <!-- </div> -->
</template>

<script>
export default {
    methods: {
    removeFromCart(posit) {
        this.$store.commit('removeFromCart', posit);
    }
},
    computed: {
    totalPrice() {
        let total = 0;

        for (let item of this.$store.state.cart) {
            total += item.totalPrice;
        }

        return total.toFixed(2);
    }
}
}
</script>
<style>
.removeBtn {
    margin-right: 1rem;
    color: red;
}
</style>