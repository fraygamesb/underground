<template>
  <div class="level">
    <template v-for="level of levels" :key="level.id">
      <h3 class="level__title">Уровень: <span :class="level.color">{{ level.title }}</span></h3>
      <div class="level__item">
        <div class="poem" v-for="item of level.items" :key="item.id">
          <div class="poem__title">{{ item.title }}</div>
          <div class="poem__author">{{ item.author }}</div>
          <router-link :to="{name:'poem', params: {id: item.id}}" class="btn btn-start">Начать</router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "LevelsComponent",
  data() {
    return {
      levels: [
        {
          id: 0,
          title: 'легкий',
          color: 'green',
          items: [
            {
              id: 0,
              author: "Всеволод Некрасов",
              text: "Познакомились у Таганского метро.\nНочевал у нее дома.\nОн — бухгалтер похоронного бюро,\nОна — медсестра родильного дома.",
              img: new URL("/src/assets/nekrasov.png", import.meta.url),
              title: "Познакомились у Таганского метро",
              level: 1,
            },
            {
              id: 1,
              author: "Всеволод Некрасов",
              text: "Познакомились у Таганского метро.\nНочевал у нее дома.\nОн — бухгалтер похоронного бюро,\nОна — медсестра родильного дома.",
              img: new URL("/src/assets/nekrasov.png", import.meta.url),
              title: "Познакомились у Таганского метро",
              level: 1,
            },
            {
              id: 2,
              author: "Всеволод Некрасов",
              text: "Познакомились у Таганского метро.\nНочевал у нее дома.\nОн — бухгалтер похоронного бюро,\nОна — медсестра родильного дома.",
              img: new URL("/src/assets/nekrasov.png", import.meta.url),
              title: "Познакомились у Таганского метро",
              level: 1,
            }
          ]
        },
        {
          id: 1,
          title: 'средний',
          color: 'yellow',
          items: [
            {
              id: 3,
              author: "Всеволод Некрасов",
              text: "Познакомились у Таганского метро.\nНочевал у нее дома.\nОн — бухгалтер похоронного бюро,\nОна — медсестра родильного дома.",
              img: new URL("/src/assets/nekrasov.png", import.meta.url),
              title: "Познакомились у Таганского метро",
              level: 1,
            },
            {
              id: 4,
              author: "Всеволод Некрасов",
              text: "Познакомились у Таганского метро.\nНочевал у нее дома.\nОн — бухгалтер похоронного бюро,\nОна — медсестра родильного дома.",
              img: new URL("/src/assets/nekrasov.png", import.meta.url),
              title: "Познакомились у Таганского метро",
              level: 1,
            }
          ]
        },
        {
          id: 2,
          title: 'сложный',
          color: 'red',
          items: [
            {
              id: 5,
              author: "Всеволод Некрасов",
              text: "Познакомились у Таганского метро.\nНочевал у нее дома.\nОн — бухгалтер похоронного бюро,\nОна — медсестра родильного дома.",
              img: new URL("/src/assets/nekrasov.png", import.meta.url),
              title: "Познакомились у Таганского метро",
              level: 1,
            },
            {
              id: 6,
              author: "Всеволод Некрасов",
              text: "Познакомились у Таганского метро.\nНочевал у нее дома.\nОн — бухгалтер похоронного бюро,\nОна — медсестра родильного дома.",
              img: new URL("/src/assets/nekrasov.png", import.meta.url),
              title: "Познакомились у Таганского метро",
              level: 1,
            },
            {
              id: 7,
              author: "Всеволод Некрасов",
              text: "Познакомились у Таганского метро.\nНочевал у нее дома.\nОн — бухгалтер похоронного бюро,\nОна — медсестра родильного дома.",
              img: new URL("/src/assets/nekrasov.png", import.meta.url),
              title: "Познакомились у Таганского метро",
              level: 1,
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.level {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}

.poem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  padding: 5px 15px;
}

.poem__title {
  font-family: Candara;
  font-weight: 400;
  color: #fff;
}


.poem__author {
  font-family: Candara;
  font-weight: 400;
  color: #fff;
}

.level__title {
  font-family: Franklin;
  color: #fff;
  font-size: 24px;
}

.level__title .green {
  font-family: Candara;
  color: #00b8a3;
}

.level__title .yellow {
  font-family: Candara;
  color: #FFCC00;
}

.level__title .red {
  font-family: Candara;
  color: #FF375F;
}

.btn-start {
  background-color: #fff;
  border-radius: 15px;
  color: #121212;
  padding: 10px 30px;
}
</style>