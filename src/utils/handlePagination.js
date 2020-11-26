/**
 * Have to return an object with keys : data, total
 * {
 *   data,
 *   total,
 * }
 */
export default function (response) {
  const { data: { data, totalPages: total = 1 } } = response
  return {
    data,
    total,
  }
}
