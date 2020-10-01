/**
 * Have to return an object with keys : data, total
 * {
 *   data,
 *   total,
 * }
 */
export default function (response) {
  const { data, headers: { 'x-total-count': total = 1 } } = response
  return {
    data: data.data,
    total,
  }
}
