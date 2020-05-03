<template>
    <ul class="list" >
        <li class="item" v-for="(iterm,index) of cities" :key="index">{{iterm.title}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Array
    }
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list{
    display :flex
    flex-direction :column
    justify-content :center
    position absolute
    top:1.58rem
    right :0
    bottom:0
    widows .4rem
    .item{
        line-height :.4rem
        text-align :center
        color:$bgColor
    }



}


</style>