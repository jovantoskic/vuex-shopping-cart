<template>
    <div>
        <h1>Shopping cart</h1>
        <ul>
            <li :key="product.id" v-for="product in products">
                {{product.title}} - {{product.price | currency}} - {{product.quantity}}
            </li>
        </ul>
        <p>Total:{{total | currency}}</p>
        <button @click="checkout">Checkout</button>
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('cart',{
                products: 'cartProducts',
                total:'cartTotal'
            }),

            ...mapState('cart',{
                checkoutStatus:state => state.checkoutStatus
            })
        },

        methods: {
            ...mapActions('cart',['checkout'])
        }
    }
</script>

<style scoped>

</style>