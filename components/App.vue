<template>
<div id="app">
    <div id="content">
        <slot />
    </div>
    <div id="startup-bg" />
</div>
</template>

<script setup>
useHead({
    script: [
        {children: "document.documentElement.classList.add('js')"}
    ]
})
</script>

<style scoped lang="scss">
@import "~/assets/styles/inc.scss";

@function spaces($start, $spacing...) {
    $g: '';
    $i: 0;
    @each $s in $spacing {
        $i: $i + 1;
        $g: $g + 'transparent calc(#{$start} + #{$i}rem - #{$s}rem / 8), #{$black} calc(#{$start} + #{$i}rem - #{$s}rem / 8), #{$black} calc(#{$start} + #{$i}rem), transparent calc(#{$start} + #{$i}rem),';
    }
    @return linear-gradient(
        180deg,
        black 0%, black $start, transparent $start,
        #{$g}
        transparent 100%
    );
}

@keyframes reset {
    $redLines: linear-gradient(90deg, transparent 0%, transparent calc(100%/8*7), $red calc(100%/8*7), $red 100%);

    from {
        display: block;
        background-size: 1em 100%;
        visibility: visible;
        background-color: $white;
    }

    20% {
        background-color: $black;
    }

    50% {
        background-image: spaces(65%, 6, 6, 6, 6, 4, 4, 4, 3, 3, 3, 2, 2, 1), $redLines;
    }

    55% {
        background-image: spaces(32%, 4, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1), $redLines;
    }

    60% {
        background-image: $redLines;
    }

    70% {
        background-size: 1em 1em;
        background-image:
            linear-gradient(transparent calc(1rem / 8), transparent calc(6rem / 8), $black calc(6rem / 8), #{$black} 100%),
            $redLines;
    }

    75% {
        background-size: 1em 100%;
        background-image: none;
    }

    to {
        background-size: 1em 100%;
        background-image: none;
        visibility: hidden;
    }
}

@keyframes opacityToggle {
    from {
        opacity: 0;
    }

    99% {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

#app {
    max-width: 54rem;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: monospace;
    position: relative;

    #content {
        flex: 1;
        display: flex;

        @include js-enabled {
            animation: 1.25s step-end opacityToggle;
        }
    }

    #startup-bg {
        width: 100%;
        max-width: 54rem;
        border: 2rem solid $white;
        position: fixed;
        top: 0;
        left: 50%;
        right: 0;
        bottom: 0;
        transform: translateX(-50%);
        visibility: hidden;

        @include js-enabled {
            animation: 1.25s step-end reset;
        }
    }

    @media (max-width: 666px) {
        padding: 1rem;

        #startup-bg {
            border-width: 1rem;
        }
    }
}
</style>
