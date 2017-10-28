<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="/">Yakıt Maliyet İzleme</a>
      </nav>
    </header>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <router-link class="nav-link" to="/">İstatistikler</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/routes">Yollarım</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/entries">Kayıtlarım</router-link>
            </li>
          </ul>
        </nav>

        <main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  padding-top: 3.5rem;
}

h1 {
  margin-bottom: 20px;
  padding-bottom: 9px;
  border-bottom: 1px solid #eee;
}

.sidebar {
  position: fixed;
  top: 51px;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  /* Scrollable contents if viewport is shorter than content. */
  border-right: 1px solid #eee;
}

.sidebar {
  padding-left: 0;
  padding-right: 0;
}

.sidebar .nav {
  margin-bottom: 20px;
}

.sidebar .nav-item {
  width: 100%;
}

.sidebar .nav-item + .nav-item {
  margin-left: 0;
}

.sidebar .nav-link {
  border-radius: 0;
}

.placeholders {
  padding-bottom: 3rem;
}

.placeholder img {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.router-link-exact-active {
  color: #fff;
  background-color: #007bff;
}
</style>
