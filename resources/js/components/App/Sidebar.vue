<template>
    <ul class="sidenav app-sidenav" :class='{open: value}'>

        <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.url"
        >
        <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: 'Обзор', url: '/', exact: 'true' },
      { title: 'Аналитика', url: '/analytics' },
      { title: 'История', url: '/history' },
      { title: 'Добавить заказ', url: '/order' },
      { title: 'Ассортимент', url: '/category' }
    ]
  })
}
</script>
