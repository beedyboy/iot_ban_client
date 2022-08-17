<template>
    <div class="footer">
  <div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a class="active" href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
        </div>
        </div>
</template>

<script>

export default {
    name : 'Pagination',
}

</script>

<style scoped>

.footer{
    display: flex;
    flex-direction: row;
    /* border: 3px solid #1424B3; */
    /* border-radius: 10px; */
    width: 25%;
    /* height: 90px; */
    margin-top: 23%;
    margin-left: 38%;
}

.pagination a {
    /* display: flex; */
    /* flex-direction: column; */
  color: black;
  /* float: left; */
font-size: 25px;
  padding: 8px 16px;

  transition: background-color .3s;
}


.pagination a.active {
  background-color:#1424B3;
  color: white;
}

/* Add a grey background color on mouse-over */
.pagination a:hover:not(.active) {background-color: #E8ECF5;}
</style>