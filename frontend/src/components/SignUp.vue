<template>
    <div class='container'>
        <form @submit.prevent='onSubmit' class='form'>
            <h2 class='form__title'>Register</h2>
            <label class='form__label'>
                First name
                <input type='text' v-model='body.name' placeholder='Estefania' class='form__input' required />
            </label>
            <label class='form__label'>
                Last Name
                <input type='text' v-model='body.lastName' placeholder='Mazo' class='form__input' required />
            </label>
            <label class='form__label'>
                URL photo
                <input type='text' v-model='body.image' placeholder='Mazo' class='form__input' required />
            </label>
            <label class='form__label'>
                Email Address
                <input type='email' v-model='body.email' placeholder='yourname@gmail.com' class='form__input'
                    required />
            </label>
            <label class='form__label'>
                Password
                <input type='password' v-model='body.password' class='form__input' placeholder='Min. 6 characters'
                    min='6' required />
            </label>
            <button type='submit' class='form__button'>LOGIN</button>
        </form>
    </div>
</template >

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            body: {
                name: '',
                lastName: '',
                email: '',
                password: '',
                image: 'https://i.ibb.co/80Xjm2w/usuario.png',
            },
            check: '',
        }
    },
    methods: {
        ...mapActions({
            setUser: 'setUser',
        }),
        onSubmit() {
            axios.post(`${import.meta.env.VITE_API_URL}/auth/sign/up`, { ...this.body })
                .then((res) => {
                    if (res.data.success) {
                        this.$router.push({ path: '/' })
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
</style>