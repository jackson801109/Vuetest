<template>
<div>
    <Navbar/>  <!-- 另一種寫法  -->
   <AlertMessage></AlertMessage>     
<div class="container-fluid">
  <div class="row">
      <Sidebar></Sidebar>
    <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <router-view></router-view>
    </main>
  </div>
</div>
</div>
</template>

<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AlertMessage from './AlertMessage';


export default {
    components: {
        Sidebar,
        Navbar,
        AlertMessage,
    },
    created() {
      // 取出 cookie 內的 token，並把此 token 發送到後端去做驗證，所有的 api 都會套用
      const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      // console.log('myCookie',myCookie);
      this.$http.defaults.headers.common['Authorization'] = myCookie;
    }
};
</script>