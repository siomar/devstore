export default function currencyFormatter(
  price: number,
  config?: Intl.NumberFormatOptions,
): string {
  const options = config || {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }
  return price.toLocaleString('pt-br', options)
}
