<template>
  <div id="container">
      <label>teste</label>
      <img src="src/assets/logoff.png" id="logoff">
  </div>
</template>

<script>
export default {

}
</script>

<style>

#logoff {
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 3%;
    transition: 0.2s;
}

#logoff:hover {
    width: 3.6%;
    transition: 0.2s;
    cursor: pointer;
}

</style>