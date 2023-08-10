import { RouterView } from 'vue-router';
<template>
    <div class="flex min-h-screen relative lg:static">
        <nav class="app-bar unique z-1 w-22rem h-screen lg:block lg:sticky lg:visible absolute hidden
        bg-white border-gray-300 border-right-1" style="background-color: rgba(0,0,0,0.3)">
            <div class="flex justify-content-end lg:hidden block">
                <Button icon="pi pi-times" text severity="secondary" size="small" rounded class="hover:bg-gray-200
                    mt-1 mr-1" iconClass="text-gray-900 text-lg" v-styleclass="{
                        selector: '.app-bar',
                        leaveActiveClass: 'my-fadeout',
                        leaveToClass: 'hidden'
                    }"></Button>
            </div>

        </nav>
        <div class="flex flex-column w-full h-screen">
            <header class="flex align-items-center justify-content-between sticky
    px-5 w-full h-4rem shadow-1">
                <div class="flex align-items-center gap-4">
                    <div class="lg:hidden block">
                        <Button icon="pi pi-bars" text severity="secondary" size="small" rounded class="hover:bg-gray-200"
                            iconClass="text-gray-900 text-2xl" v-styleclass="{
                                selector: '.app-bar',
                                enterClass: 'hidden',
                                leaveActiveClass: 'my-fadeout',
                                leaveToClass: 'hidden',
                                enterActiveClass: 'my-fadein',
                                hideOnOutsideClick: true
                            }"></Button>
                    </div>
                    <span class="text-lg">PrimeVue 3.28.0</span>
                </div>
                <div>
                    <span class="text-lg">Documentation</span>
                </div>
            </header>
            <main class="h-full w-full bg-gray-100">
                <RouterView></RouterView>
            </main>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@keyframes my-fadein {
    0% {
        left: -350px;
    }

    100% {
        left: 0;
    }
}

@keyframes my-fadeout {
    0% {
        left: 0;
    }

    100% {
        left: -350px;
    }
}

.my-fadein {
    animation: my-fadein 150ms ease-out;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}

.unique::before{
    background-color: black;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width:50px;
    height: 50px;
    display: block;
}

</style>