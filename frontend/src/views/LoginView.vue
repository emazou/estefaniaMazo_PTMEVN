<template>
  <main class='container--login'>
    <aside class='container__aside'>
      <img src='../assets/logo.svg' class='aside__img' />
      <h2 class='aside__title'>¡Welcome! Sign to start</h2>
    </aside>
    <div class='container__forms'>
      <div class='register'>
        <p class='register__text'>{{ message }}</p>
        <button v-on:click='setForm' class='register__button'>{{ button }}</button>
      </div>
      <div class='login' v-show='!register'>
        <SignIn />
      </div>
      <div v-show='register'>
        <SignUp />
      </div>
    </div>
  </main>
</template>

<script>
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    SignIn,
    SignUp
  },
  data() {
    return {
      button: '',
      message: 'No employer account yet?'
    }
  },
  computed: {
    ...mapGetters({
      register: 'register'
    })
  },
  mounted() {
    this.initialForm()
  },
  methods: {
    ...mapActions({
      setRegister: 'setRegister',
    }),
    initialForm() {
      this.setRegister(false)
      this.button = 'Register'
      this.message = 'No employer account yet?'
    },
    setForm() {
      if (!this.register) {
        this.setRegister(true)
        this.button = 'Login'
        this.message = 'Login with your account '
      } else {
        this.setRegister(false)
        this.button = 'Register'
        this.message = 'No employer account yet?'
      }
    }
  }
};
</script>

<style scoped>
.container--login {
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.container__aside {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 100%;
  padding: 1rem 2rem;
  position: absolute;
  gap: 3rem;
}

.aside__img {
  width: 3rem;
}

.aside__title {
  color: white;
  font-size: 2rem;
  display: none;
}

.container__forms {
  width: 100%;
}

.register {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 10vh;
  gap: 1rem;
  padding: 1.5rem;
}

.register__text {
  color: #757575;
}

.register__button {
  padding: .3rem 1rem;
  border: 1px solid #248AFF;
  background: none;
  border-radius: .3rem;
  color: #248AFF;
  cursor: pointer;
}

.register__button:hover {
  background: #248AFF;
  color: white;
}

@media screen and (min-width: 768px) {
  .container__aside {
    background-color: #248AFF;
    width: 25vw;
  }

  .aside__title {
    display: block;
  }
}
</style>

