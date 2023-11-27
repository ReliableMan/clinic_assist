<template>
  <layout-with-sticky-footer>
    <template #header>
      <the-header />
    </template>
    <template #body>
      <div class="d-flex flex-column items-center content-center">
        <div style="width: 50%">
          <div class="mt-20">
            <h3>Политика обработки персональных данных</h3>
          </div>
          <div class="mt-10 d-flex flex-column items-center">
            <p>
              Оставляя данные на сайте, Вы соглашаетесь с Политикой
              конфиденциальности и защиты информации.
            </p>
          </div>
          <div class="mt-20">
            <h3>Защита данных</h3>
          </div>
          <div class="mt-10 d-flex flex-column items-center">
            <p>
              Администрация сайта ************** (далее Сайт) не может передать
              или раскрыть информацию, предоставленную пользователем (далее
              Пользователь) при регистрации и использовании функций сайта
              третьим лицам, кроме случаев, описанных законодательством страны,
              на территории которой пользователь ведет свою деятельность.
            </p>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <the-footer />
    </template>
  </layout-with-sticky-footer>
</template>

<script>
import TheHeader from '@/components/app/TheHeader.vue'
import TheFooter from '@/components/app/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<router>
  {
    path: '/personal-data-policy',
    name: 'personal-data-policy'
  }
</router>
