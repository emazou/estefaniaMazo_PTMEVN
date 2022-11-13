<template>
    <div class='container__sign'>
        <form @submit.prevent='onSubmit' class='form'>
            <h2 class='form__title'>Enter your credentials</h2>
            <label class='form__label'>
                Email Address
                <input type='email' v-model='email' placeholder='yourname@gmail.com' class='form__input' required />
            </label>
            <label class='form__label'>
                Password
                <input type='password' v-model='password' placeholder='smallTiger21' class='form__input' required />
            </label>
            <label class='form__label form__label--checkbox'>
                <input type='checkbox' value={true} v-model='check' class='form__input form__input--checkbox' />
                Keep me signed in
            </label>
            <p class='error'>{{ error }}</p>
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
            email: '',
            password: '',
            check: '',
            error: ''
        }
    },
    methods: {
        ...mapActions({
            setUser: 'setUser',
        }),
        onSubmit() {
            axios.post(`${import.meta.env.VITE_API_URL}/auth/sign/in`, { email: this.email, password: this.password })
                .then((res) => {
                    if (res.data.success) {
                        localStorage.setItem('token', res.data.response.token);
                        this.setUser(res.data.response.user);
                        this.$router.push({ path: '/' })
                    } else {
                        this.error = res.data.message
                    }
                })
                .catch((error) => {
                    this.error = error.response.data.message
                })
        }
    }
}
</script>

<style scoped>
.container__sign {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.form__title {
    align-self: start;
    font-size: 1.2rem;
}

.form__label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
.form__input--checkbox{
    width: 1rem;
    cursor: pointer;
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
.error {
    color: red;
}
</style>