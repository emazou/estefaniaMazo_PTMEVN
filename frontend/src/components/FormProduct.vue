<template>
    <div class='container'>
        <form @submit.prevent='onSubmit' class='form'>
            <h2 class='form__title'>Add product</h2>
            <label class='form__label'>
                Name 
                <input type='text' v-model='body.name' placeholder='Name' class='form__input' required />
            </label>
            <label class='form__label'>
                Price
                <input type='number' v-model='body.price' placeholder='232' class='form__input' required />
            </label>
            <label class='form__label'>
                URL image
                <input type='text' v-model='body.image' placeholder='http://image.png' class='form__input' required />
            </label>
            <label class='form__label'>
                Rating (1-5) &starf; &starf; &starf; &starf; &starf; 
                <input type='number' v-model='body.rating' placeholder='1-5' min='1' max='5' class='form__input'
                    required />
            </label>
            <button type='submit' class='form__button'>Add</button>
        </form>
    </div>
</template >

<script>
import axios from 'axios';
export default {
    data() {
        return {
            body: {
                name: '',
                price: Number,
                rating: Number,
                image: 'http://',
            },
        }
    },
    methods: {
        onSubmit() {
            axios.post(`${import.meta.env.VITE_API_URL}/products`,
                {
                    ...this.body
                },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
            )
                .then((res) => {
                    if (res.data.success) {
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    background-color: #fff;
    border-radius: .5rem;
}

.form__title {
    align-self: start;
    font-size: 1.2rem;
}

.form__label {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 18rem;
    color: #4A4844;
}

.form__label--checkbox {
    flex-direction: row;
}

.form__input {
    padding: .6rem;
    border-radius: .3rem;
    border: 1px solid #E5E5E5;
}

.form__button {
    background-color: #248AFF;
    color: aliceblue;
    font-weight: bold;
    padding: .8rem;
    border: none;
    border-radius: .3rem;
    cursor: pointer;
}
.form__button:hover{
    background-color: #307ace;
}
</style>