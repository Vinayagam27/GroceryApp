export default {
    template: `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Grocery App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
              </li>              
              <li class="nav-item" v-if="role=='admin'">
                <router-link class="nav-link" to="/users">Users</router-link>
              </li>              
              <li class="nav-item" v-if="role=='manager'">
                <router-link class="nav-link" to="/category-manager">Categories</router-link>
              </li>
              <li class="nav-item" v-if="role=='manager'">
              <router-link class="nav-link" to="/product-manager">Products</router-link>
              </li>
              <li class="nav-item" v-if="role=='admin'">
                 <router-link class="nav-link" to="/category-admin">Categories</router-link>
              </li>
              <li class="nav-item" v-if="role=='customer'">
                  <router-link class="nav-link" to="/buy-products">Buy Products</router-link>
              </li>              
              <li class="nav-item" v-if="role=='customer'">
                  <router-link class="nav-link" to="/cart-products">Cart</router-link>
              </li>
              <li class="nav-item" v-if="role!=='customer' && is_login">
                <router-link class="nav-link" to="/search-products">Search</router-link>
              </li>
              <li class="nav-item" v-if="is_login">
                <button class="nav-link" @click='logout' >Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
    ,
        data() {
      return {
        role: localStorage.getItem('role'),
        is_login: localStorage.getItem('auth-token'),
        searchQuery: ''
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('auth-token')
        localStorage.removeItem('role')
        this.$router.push({ path: '/login' })
      },
      
    },
}
