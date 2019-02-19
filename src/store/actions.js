import shop from '@/api/shop'

export default {
    fetchProducts({commit}) {
        return new Promise((resolve) => {
            shop.getProducts((products) => {
                commit('setProducts', products)
                resolve()
            })
        })
    },
    addProductToCart(context, product) {
        if(context.getters.productIsInStock(product)) {
            const cartItem = context.state.cart.find(item => item.id === product.id)
            if(!cartItem)  {
                context.commit('pushProductToCart', product.id)
            } else {
                context.commit('incrementItemQuantity',cartItem)
            }
            context.commit('decrementProductInventory', product)
        }
    },
    checkout({state, commit}) {
        shop.buyProducts(
            state.cart,
            () => {
                commit('emptyCart')
                commit('setCheckoutStatus', 'success')
            },
            () => {
                commit('setCheckoutStatus', 'fail')
            }
        )
    }
}