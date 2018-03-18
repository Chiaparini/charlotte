<template>
    <div>
        <div class="banner"></div>
        <div class="ingress">
            <div class="ingress__crown">
                <img src="~_img/crown.svg" alt="Crown">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .banner {
        max-height: 600px;
        height: 100%;
        width: 100%;

        position: absolute;
        top: 0;

        z-index: -1;

        background-image: url('~_img/hero.jpg');
        background-size: cover;
    }

    .ingress {
        display: flex;

        align-items: center;
        justify-content: center;

        &__crown {
            width: 100%;
            height: auto;
            max-width: 60px;
        }
    }
</style>
