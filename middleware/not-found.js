export default function ({ error }) {
  error({ statusCode: 404, message: 'Page not found' })
}
