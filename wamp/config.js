export default async function ({ $axios, $config, $auth }) {
  const userId = $auth.user.user.id
  const { data } = await $axios('/chat/get-ticket')

  return {
    url: $config.wampUrl,
    topic: `com.chat.user_${userId}`,
    realm: 'realm1',
    authmethods: ['ticket'],
    authid: String(userId),
    onchallenge: (session, method) => {
      if (method === 'ticket') {
        return data.ticket
      }
    },
  }
}
