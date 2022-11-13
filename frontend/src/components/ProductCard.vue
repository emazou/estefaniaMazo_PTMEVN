<template>

    <div class='card'>
        <img :src='image' class='card__img' />
        <div class="card__body">
            <div class='card__title'>
                <p>{{ name }}</p>
                <div class='options'>
                    <button v-on:click='showMenu = !showMenu' class='options__button'>
                        <Icon icon='zondicons:dots-horizontal-triple' />
                    </button>
                    <div class='options__menu' v-show='showMenu'>
                        <button v-on:click='admProduct(id)' class='button'>
                            <Icon icon='zondicons:edit-pencil' />
                            Edit
                        </button>
                        <button v-on:click='deleteProduct(id)' class='button'>
                            <Icon icon='ic:baseline-delete' />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <h3>$ {{ price }}</h3>
            <div class='card__starts'>
                <span v-for='star in rating' class='star'>&starf;</span>
                <span v-for='star in (5 - rating)' class='star'>&star;</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { Icon } from '@iconify/vue';
export default {
    name: 'ProductCard',
    props: {
        id: String,
        name: String,
        price: Number,
        image: String,
        rating: Number,
        getProducts: Function,
    },
    components: {
        Icon
    },
    data() {
        return {
            showMenu: false,
            open: false
        }
    },
    methods: {
        deleteProduct(id) {
            axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
                .then((res) => {
                    if (res.data.success) {
                        this.getProducts()
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        admProduct(id) {
            this.$router.push({ name: 'admproduct', params: { id: id } })
        }
    }
}
</script>

<style scoped>
.card {
    background-color: aqua;
    width: 12rem;
    height: 17rem;
    background: #FFFFFF;
    box-shadow: 0px 3.13056px 34.4361px -16.4354px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
}

.card__img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
}

.card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    padding: .5rem;
}

.card__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.options {
    position: relative;
}

.options__button {
    font-size: 1rem;
    background: none;
    border: none;
    cursor: pointer;
}

.options__menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 6rem;
    height: 4rem;
    padding: .5rem;
    right: 0;
    top: 1.5rem;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    gap: .5rem;
}

.button {
    cursor: pointer;
    display: flex;
    padding: .1rem;
    gap: .5rem;
    background: none;
    border: none;
}

.button:hover,
.options__button:hover {
    background-color: rgb(244, 247, 250);
}

.card__starts {
    padding: .3rem;
    align-self: flex-end;
}

.star {
    color: #F8A33C;
    font-size: 1.5rem;
}
</style>