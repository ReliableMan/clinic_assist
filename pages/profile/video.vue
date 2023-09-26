<template>
  <section class="pv-40 ph-36">
    <h2>{{ $t('common.instructional_video') }}</h2>

    <ui-divider class="text-blue-light-1 mt-34 mb-36" horizontal />

    <div class="fs-20 lh-24 mb-36">
      {{ $t('common.instructional_video_description') }}
    </div>

    <div class="mb-36">
      <!-- <iframe
        width="720"
        height="450"
        src="https://rutube.ru/pl/?pl_id&pl_type&pl_video=e2057f2dc80880a8e1132a15f1620145"
        frameborder="0"
        allow="clipboard-write"
        webkitAllowFullScreen
        mozallowfullscreen
        allowfullscreen
      ></iframe> -->
      <iframe
        width="720"
        height="450"
        src="https://www.youtube.com/embed/Ag_qRNTB1Ko"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="fs-14 lh-20">
      {{ $t('common.instructional_video_email_message') }}
      <!-- <a :href="email.path">{{ email.label }}</a> -->
    </div>
  </section>
</template>

<script>
export default {
  layout: 'profile',
  // computed: {
  //   email() {
  //     return this.$store.state.meta.contacts_links.find(
  //       ({ key }) => key === 'email'
  //     )
  //   },
  // },
}
</script>

<router>
  {
    path: '/video',
    name: 'video',
  }
</router>
