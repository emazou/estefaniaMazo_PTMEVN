<template>
    <HeaderBar />
    <div class='container'>
        <input type='text' v-model='search' placeholder='Search' v-on:keyup='getProducts()' class='container__input' />
        <div class='container__products'>
            <ProductCard :getProducts='getProducts' v-for='product in products' :key='product._id' :id='product._id'
                :name='product.name' :price='product.price' :rating='product.rating' :date='product.date'
                :image='product.image' />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { nextTick } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import HeaderBar from '@/components/HeaderBar.vue';
export default {
    name: 'HomeView',
    components: {
        ProductCard,
        HeaderBar
    },
    data() {
        return {
            products: [],
            search: ''
        }

    },
    async mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            axios.get(`${import.meta.env.VITE_API_URL}/products?name=${this.search}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
                .then((res) => {
                    if (res.data.success) {
                        this.products = res.data.response
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            await nextTick()
        },
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    width: 100%;
    background-color: #1e1e1e0b;
    min-height: 90vh;
}

.container__input {
    width: 18rem;
    padding: .6rem;
    border-radius: .3rem;
    border: 1px solid #E5E5E5;
}

.container__products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
}
</style>