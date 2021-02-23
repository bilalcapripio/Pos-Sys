<template>

  <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
    <div class="wrapper"> 
          <!-- <router-link to="/Home">Home</router-link>
          <router-link to="/Navbar">Navbar</router-link>
          <router-link to="/Content">Content</router-link>
          <router-link to="/Sidebar">Sidebar</router-link>
          <router-link to="/Footer">Footer</router-link> -->
          <!-- <Navbar/> -->
          <router-view/>
          <!-- <Sidebar/>
          <Content/>
          <Footer/> -->
          <div  v-for="names in check" v-bind:key="names.id">
                    <span>{{names}}</span>
          </div>
          
    </div>
  </body>

</template>

<script>

// import Navbar from './components/Navbar.vue'
// import Sidebar from './components/Sidebar.vue'
// import Content from './components/Content.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // Navbar,
    // Sidebar,
    // Content,
    // Footer
  },
  data(){
    return{
      check:[],
    }
  },
  // mounted(){
  //   this.records();
  // },
      mounted(){
        axios.get("http://192.168.100.9/Project_Laravel/public/api/test")
          .then(response => {
            this.check = response.data.results
        })

        .catch(error => {
            console.log(error)
        })

        

    } 
    

}



</script>
<style  scoped>
@import "./assets/Css/style.css"; 
/* @import "./assets/admin-lte/css/adminlte.scss"; */
</style>
