<template>
    <RouterView />
</template>

<script>
export default {};
</script>

<style lang="scss">

h2{
    display: flex;
    justify-content: center;
    align-items: center;
};

nav{
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    // align-items: center;
}

.active{
    color: red;
};

</style>
