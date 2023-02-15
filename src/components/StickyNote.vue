<script>
export default{
    props:{
        note: {
            type:String
        },
        onDelete:{
            type:Function
        },
        noteIndex: {
            type: Number
        },
    },
    computed:{
        angle(){
            return Math.random() * (15 - (-15)) + (-15);
        }
    },
   methods:{
        removeNote(){
            this.onDelete(this.noteIndex)
        }
    }
}
</script>

<template>
    <div class="sticky-note" :ref="`note-${noteIndex}`" :style="`transform: rotate(${angle}deg)`">
      <div class="sticky-note__sticky-area" :style="`justify-content:${angle > 0 ? 'start' : 'end'}`">
        <div class="sticky-note__pin" @click.stop="removeNote()"></div>
      </div>
      <div class="sticky-note__note">
       {{ note }}
        </div>
    </div>
</template>

<style scoped>
.sticky-note{
    width: 200px;
    height: 200px;
    background-color: #f1c40f;
}

.sticky-note__sticky-area{
    width: 100%;
    height:30px;
    background-color:#f39c12;
    display: flex;
    align-items: center;
    padding:10px;
}

.sticky-note__note{
    padding: 5px;
}

.sticky-note__pin{
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50px;
    justify-self: end;
}
</style>