<template>
  <main class='container'>
    <aside class='container__aside'>
      <img src='../assets/logo.svg' class='aside__img'/>
      <h2 class='aside__title'>¡Welcome! Sign to start</h2>
    </aside>
    <div class='container__forms'>
      <div class='register'>
        <p class='register__text'>{{message}}</p>
        <button v-on:click='setForm' class='register__button'>{{button}}</button>
      </div>
      <div class='login' v-show="show == 'login'">
        <SignIn/>
      </div>
      <div v-show="show == 'register'">
        <SignUp />
      </div>
    </div>
  </main>
</template>

<script>
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';
export default{
  components:{
    SignIn,
    SignUp
  },
  data() {
        return {
            show: 'login',
            button: 'Register',
            message: 'No employer account yet?'
        }
    },
    methods:{
      setForm(){
        if(this.show === 'login'){
          this.show = 'register'
          this.button = 'Login'
          this.message = 'Login with your account '
        } else {
          this.show = 'login'
          this.button = 'Register'
          this.message = 'No employer account yet?'
        }
      }
    }
};
</script>

<style scoped>
.container{
  display: flex;
  width: 100%;
  min-height: 90vh;
  position: relative;
}
.container__aside{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 100%;
  padding: 1rem 2rem;
  position: absolute;
  gap: 3rem;
}
.aside__img{
  width: 3rem;
}
.aside__title{
  color: white;
  font-size: 2rem;
}
.container__forms{
  width: 100%;
}
.register{
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 10vh;
  gap: 1rem;
  padding: 1.5rem;
}
.register__text{
  color: #757575;
}
.register__button{
  padding: .3rem 1rem;
  border: 1px solid #248AFF;
  background: none;
  border-radius: .3rem;
  color: #248AFF;
  font-weight: 400;
  cursor: pointer;
}
@media screen and (min-width: 768px) {
  .container__aside{
  background-color: #248AFF;
  width: 25vw;
}
}
</style>

