<template>
    <HeaderBar :newProduct='true' />
    <div class='container'>
        <FormProduct :id='id' />
    </div>
</template>
<script>
import FormProduct from '../components/FormProduct.vue';
import HeaderBar from '../components/HeaderBar.vue';
export default {
    props: ['id'],
    data() {
    },
    components: { 
        FormProduct,
        HeaderBar 
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    background-color: #1e1e1e0b;
    min-height: 90vh;
}
</style>