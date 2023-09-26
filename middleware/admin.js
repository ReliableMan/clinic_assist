export default async function ({ req, app, $auth }) {
  const token = app.$cookies.get('jwt_token')
  const host = process.client ? window.location.host : req.headers.host

  if (token) {
    app.$cookies.remove('jwt_token', {
      path: '/',
      domain: `.${host}`,
    })

    await $auth.setUserToken(token)
  }
}
