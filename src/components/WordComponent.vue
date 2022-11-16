<template>
  <div class="word">
    Vladimir Popov is clown
    <div class="container">
      <div class="word__inner">
        <h3>{{ poems[0].title }}</h3>
        <template v-for="(item, index) in getRandom" :key="index">

            <div @mousedown="mousedown($event, index)" :ref="`line_${index}`" class="mousemove vova">
              {{ item }}
            </div>
        </template>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'WordComponent',
  data() {
    return {
      poems: [{
        title: "Свобода есть",
        text: "Свобода есть \n Свобода есть \n Свобода есть \n Свобода есть свобода",
        author: "Всеволод Некрасов",
      }],
    }
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length, randomIndex;

      while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    },
    mousedown(event, i) {
      //console.log(this.$refs)
      event.preventDefault()
      let line = this.$refs[`line_${i}`][0];
      //console.log(line);
      let shiftX = event.clientX - line.getBoundingClientRect().left;
      let shiftY = event.clientY - line.getBoundingClientRect().top;

      line.style.position = 'absolute';
      line.style.zIndex = 1000;
      document.body.append(line);

      moveAt(event.pageX, event.pageY);

      // переносит мяч на координаты (pageX, pageY),
      // дополнительно учитывая изначальный сдвиг относительно указателя мыши
      function moveAt(pageX, pageY) {
        line.style.left = pageX - shiftX + 'px';
        line.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      // передвигаем мяч при событии mousemove
      document.addEventListener('mousemove', onMouseMove);

      // отпустить мяч, удалить ненужные обработчики
      line.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        line.onmouseup = null;
      };
    }
  },
  computed: {
    getRandom() {
      return this.shuffle(this.poems[0].text.split("\n"));
    }
  }

}
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}

.mousemove {
  cursor: move;
}

.vova {
  border: 2px solid purple;
  padding: 20px 40px;
}
</style>