<template>
    <div class="card p-4 m-4 bg-white">
        <DataTable :value="products" showGridlines  tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const products = ref([]);

onMounted(() => {
    products.value.push({ 
        code: 1,
        name: 'Product',
        category: 'Product',
        quantity: 1
    })
});


</script>
