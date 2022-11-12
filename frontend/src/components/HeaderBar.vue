<template>
    <div class='header'>
        <img src='../assets/logo.svg' class='header__logo' />
        <button v-show='!newProduct' v-on:click='admProduct()' class='header__button-new'>+ NEW</button>
        <button v-show='newProduct' v-on:click='admProduct()' class='header__button-new'>PRODUCTS</button>
        <div class='header__items'>
            <p class='name'>{{ user.name }} {{ user.lastName }}</p>
            <button class='button-user' v-on:click='showMenu = !showMenu'>
                <img :src='user.image' class='button-user_img' />
            </button>
            <div v-show='showMenu' class='menu'>
                <button v-on:click='signOut' class='menu__button'>Sign Out
                    <Icon icon='bi:box-arrow-right' />
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon
    },
    props:{
        newProduct:{
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            showMenu: false
        }
    },
    computed: {
        ...mapGetters({
            user: 'user'
        })
    },
    methods: {
        ...mapActions({
            setUser: 'setUser',
        }),
        signOut() {
            axios.post(`${import.meta.env.VITE_API_URL}/auth/sign/out`, { email: this.user.email })
                .then((res) => {
                    if (res.data.success) {
                        localStorage.removeItem('token');
                        localStorage.removeItem('vuex')
                        this.setUser({});
                        this.$router.push({ path: '/login' })
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        admProduct() {
            if(this.newProduct){
                this.$router.push({ path: '/' })
            }else{
                this.$router.push({ name: 'admproduct', params: { id: 'newproduct' } })
            }
        }
    }
}
</script>
<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding: 0 1rem;
    box-shadow: 0px 2px 30px -16.4354px rgba(0, 0, 0, 0.15);
}

.header__logo {
    width: 6vh;
}

.header__items {
    display: flex;
    position: relative;
    align-items: center;
    gap: 1rem;
}
.name{
    display: none;
}
.header__button-new {
    cursor: pointer;
    padding: .5rem 1rem;
    background-color: #248AFF;
    border-radius: .3rem;
    color: white;
    font-weight: 600;
    border: none;
    height: 2rem;
}

.header__button-new:hover {
    background-color: #307ace;
}

.button-user {
    border: none;
    background: none;
    cursor: pointer;
}

.button-user_img {
    height: 6vh;
    border-radius: 50%;
}

.menu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 5rem;
    position: absolute;
    right: 0;
    top: 7vh;
    border-radius: .3rem;
    background-color: #ffffff;
    border: 1px solid #dde3e8;
}

.menu__button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    font-size: 1rem;
    padding: .3rem;
    cursor: pointer;
    border-radius: .3rem;
    gap: .5rem;
}

.menu__button:hover {
    background-color: #dde3e8;
}
@media screen and (min-width:768px){
    .name{
        display: block;
    }
}
</style>