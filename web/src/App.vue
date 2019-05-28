<template>
    <div>
        <div class="router-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
</script>

<style lang='scss'>
@import './assets/css/base.scss';
/*
 * 全局样式
 * 在每个组件中均可用
 */
body {
    font-family: "Microsoft Yahei", sans-serif;
    background-color: #000c3b;
    @media screen and (max-width: 1024px){
        background-color: #ffffff;
    }
}
* {
    margin: 0px;
    padding: 0px;
}
a {
    text-decoration: none;
}
ul,li,ol {
    list-style: none outside none;
    -webkit-padding-start: 0px;
}
.clear-both {
    clear:both;
}
</style>
