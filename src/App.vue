<template>
  <div id="app">
    <ProductList></ProductList>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

export default {
    components: {
        ProductList,
        ShoppingCart
    }
}

</script>
