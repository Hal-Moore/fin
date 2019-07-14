<template>
    <main class="content">
    <div class="page-title">
        <h4>
            <router-link to="/categories">Категории</router-link>
            <i class="material-icons">keyboard_arrow_right</i>
            Добавить категорию
        </h4>
        <span>
            <button class="btn btn-small red">
              <i class="material-icons">delete</i>
            </button>
          </span>
    </div>

    <div class="row">
        <form v-on:submit.prevent="submitCategory()" class="col s12 l12">
            <div class="col s12 l3">
                <div class="input-field ">
                    <input id="name" type="text" v-model="posts.name">
                    <label for="name">Название</label>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>Загрузить изображение</span>
                            <input type="file" v-on:change="onFileChange">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>

                </div>

                <div>
                    <button class="waves-effect waves-light btn">
                    Сохранить изменения
                    </button>
                </div>
            </div>
            <div class="col s12 l3 center">
                <div v-if="!posts.image">
                    <img src="/images/No_image.png" style="height: 200px"/>

                </div>
                <div v-else>
                    <img :src="posts.image" style="height: 200px"/>
                    <button @click="removeImage" class="btn">Удалить изображение</button>
                </div>
            </div>
        </form>




    </div>
</main>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import axios from 'axios';
export default {
  data: function() {
    return {
      posts: {
          name:'',
          image:'',
      },
      errors: []
    }
  },
  methods:{
  submitCategory() {
    axios.post(`/categories`, this.posts)
    .then(response => {
        console.log(response)
        this.$router.push({path:'/category'})
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  onFileChange(e) {
    var files = e.target.files || e.dataTransfer.files;
    console.log(files);
    if (!files.length)
        return;
    this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        this.posts.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.posts.image = '';
      e.posts.target.reset();
    }

  }
}

 </script>

