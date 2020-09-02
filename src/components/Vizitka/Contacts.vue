<template>
    <div id="div">
        <h3>Contacts</h3>
        <p>Name: <span>Alexandr</span></p>
        <p>Town: <span>Kremenchuk</span></p>
        <p>Number: <span>+380507777777</span></p>
        <p>Email: <span>xxx@xxx.com</span></p>
        <br>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.8643721578675!2d33.442435929214334!3d49.11594597650104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d7523987a567ad%3A0xb65b5347f68aee49!2zMjc4LdC5INC60LIt0LssINCa0YDQtdC80LXQvdGH0YPQsywg0J_QvtC70YLQsNCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDM5NjAw!5e0!3m2!1sru!2sua!4v1599056519001!5m2!1sru!2sua" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</template>
<script>
export default {
    name: 'Contacts'
}
</script>

<style scoped>
p {
  width: 200px;
  box-shadow: 0 3px 20px #0f0f0f23;
  padding: 10px;
  margin: 20px 0 0 20px;
}
span {
    float: right;
}
</style>