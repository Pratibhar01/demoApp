<template>
    <h1>
        Home Page
    </h1>
    <router-link to="/note-me-app">
        <button> NoteMe App</button>
    </router-link>

     <router-link to="/food-app">
        <button>Food App </button>
    </router-link>
    
</template>

<style scoped>
button{
    display:block;
    width: 15%;
    padding: 15px;
    margin: 10px auto;
    background-color:#1abc9c;
}

h1{
    color:white;
    background-color:black;
}
</style>