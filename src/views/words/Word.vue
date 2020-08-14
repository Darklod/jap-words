<template>
  <v-card class="ma-4 header">
    
    <v-row dense align="end">
        <v-col>
            <v-sheet class="d-flex ml-4 my-2" :color="familiarityColor" width="4" height="70px"/>
        </v-col>
        <v-col cols="6">
            <v-card-title>
                {{word.text}}
            </v-card-title>
            <v-card-subtitle>
                {{word.translation}}
            </v-card-subtitle>
        </v-col>
        <v-col cols="5" class="right-end mr-4 my-3"  align-self="stretch"> 
            <div class="level px-2">N{{word.jlpt}}</div>
            <div class="word-actions">
                <v-btn class="ma-1" tile large color="black" icon>
                    <v-icon size="x-large">mdi-text-subject</v-icon>
                </v-btn>
                <v-btn class="ma-1" tile large color="black" icon>
                    <v-icon size="x-large">mdi-pencil</v-icon>
                </v-btn>
                <v-btn class="ma-1" tile large color="black" icon>
                    <v-icon size="x-large">mdi-delete</v-icon>
                </v-btn>
            </div>
        </v-col>
    </v-row>
    
  </v-card>
</template>

<script>
export default {
    props: ["word"],
    computed: {
        familiarityColor() {
            switch (this.word.familiarity) {
                case 3:
                    return "#2f74b5"
                case 2:
                    return "#ffc000"
                case 1:
                default:
                    return "#92d050"
            }
        }
    }
}
</script>

<style scoped>

.level {
  background-color: #0cb14e;
  color: white;
  width: 40px;
  text-align: center;
  margin-right: 5px;
}

.right-end {

    display: flex;
    flex-direction: column;
    align-items: flex-end;

}

.word-actions {
    display: inline-flex;
    height: 0px;
}

</style>
