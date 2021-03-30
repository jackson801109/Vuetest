<template>
    <div>
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">上佳廣告公司</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
            <a class="nav-link" href="#" @click.prevent="signout">Sign out</a>
            </li>
        </ul>
        </header>
        <!-- <nav class="fixed-top wow fadeInDown">
        <div class="logo">
            <a href="/">
                <img src="/images/MELA_logo.svg">
            </a>
        </div> -->
        <!-- 選單 -->
        <!-- <ul class="nav float-right align-items-center" style="z-index: 99;"> 
            <li class="nav-item">
                <div>
                    <a class="nav-link nav-menu" href="/melaPlace">
                        蔬果產地<br>
                        About
                    </a>
                </div>
            </li>
            <li class="nav-item">
                <div>
                    <a class="nav-link nav-menu" href="/melaShop">
                        方案訂閱<br>
                        shop
                    </a>
                </div>
            </li> 
            <li class="nav-item">
                <div>
                    <a class="nav-link nav-menu" href="/melaEvent">
                        小農體驗<br>
                        Experience
                    </a>
                </div>
            </li>
            <li class="nav-item">
                <div>
                    <a class="nav-link" href="/users/memberLogin">
                        <div>
                            <button class="btnMela">登入/註冊</button>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
        <a href="#" class="showmenu">menu</a>
    </nav> -->
    </div>
</template>

<script>
import { WOW } from 'wowjs';
export default {
    name: 'Navbar',
    methods: {
        signout() {
            const vm = this;
            const url = `${process.env.APIPATH}logout`;
            this.$http.post(url).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    vm.$router.push('/signin');
                }
            });
        },
    },
    created() {
    new WOW().init()
}
};
</script>