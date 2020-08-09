<template>
    <div>
        <Word v-for="word in words" :key="word.text" :word="word" />
    </div>
</template>

<script>
import Word from '@/components/Word'
export default {
    name:"WordList",
    props: ["words"],
    components: {
        Word,
    },
}
</script>

<style>

</style>
