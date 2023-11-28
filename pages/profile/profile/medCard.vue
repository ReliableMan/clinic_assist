<template>
  <div>
    <ui-transition-slide>
      <!-- <section-user v-if="sectionUser" @editUser="editUser" /> -->
      <!-- ! пока без редактирования юзера -->
      <section-user v-if="sectionUser" />
    </ui-transition-slide>

    <!-- <ui-transition-slide>
      <section-no-user v-if="sectionNoUser" @editUser="editUser2" />
    </ui-transition-slide> -->

    <!-- <ui-transition-slide>
      <section-edit-user v-if="sectionEditUser" @closeEdit="noEditUser" />
    </ui-transition-slide> -->
  </div>
</template>

<script>
import SectionUser from '@/components/app/ProfilePatientPage/SectionUser.vue'
// import SectionNoUser from '@/components/app/ProfilePatientPage/SectionNoUser.vue'
// import SectionEditUser from '@/components/app/ProfilePatientPage/SectionEditUser.vue'
export default {
  name: 'MedCard',
  components: {
    SectionUser,
    // SectionNoUser,
    // SectionEditUser,
  },
  data() {
    return {
      sectionUser: true,
      sectionNoUser: false,
      sectionEditUser: false,
    }
  },
  methods: {
    editUser() {
      this.sectionEditUser = true
      this.sectionUser = false
    },
    editUser2() {
      this.sectionEditUser = true
      this.sectionNoUser = false
    },
    noEditUser() {
      this.sectionEditUser = false
      this.sectionUser = true
    },
  },
}
</script>

<router>
  {
    path: '/profile/med-card',
    name: 'med-card',
  }
</router>
