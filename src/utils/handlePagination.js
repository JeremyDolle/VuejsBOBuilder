/**
 * Have to return an object with keys : data, total
 * {
 *   data,
 *   total,
 * }
 */
export default function (response) {
  const { data, headers: { 'x-total-count': total } } = response
  return {
    data,
    total,
  }
}
