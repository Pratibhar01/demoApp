<script>
import StickyNote from "../components/StickyNote.vue"

export default{
  data(){
    return{
      newNote: "",
      notes:[]
    }
  },
  methods:{
    addNote(){
      this.notes.push(this.newNote)
      this.newNote = ""
    },
    deleteNote(noteIndex){
      this.notes.splice(noteIndex, 1)
    }
  },
  components:{
    StickyNote
  },
  updated(){
    console.log(this.newNote)
    console.log(this.notes)
  },
  beforeUpdate(){
    console.log("The component is going to update with new state")
  }
}
</script>

<template>
 <div id="note-app">
   <div class="banner">
     <h1>NoteMe</h1>
     <input  type="text"  placeholder="Enter your post" v-model="newNote" @keyup.enter="addNote"/>
   </div>
 </div>
<div class="sticky-notes__area">
  <sticky-note 
  v-for="(note, noteIndex) in notes" 
  :key="noteIndex" 
  :note="note" 
  :noteIndex="noteIndex"
  :onDelete="deleteNote"
  ></sticky-note>
</div>
</template>

<style scoped>
#note-app{
 height:200px;
 width:100%;
 background-color:#2c3e50;
 display: flex;
 justify-content: center;
 align-items: center;
}

 h1{
    text-align:center;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

input{
    font-size: 18px;
    padding: 15px;
    outLine: none
}

.sticky-notes__area{
  width:80%;
  margin: auto;
  display:grid;
  margin-top: 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>
