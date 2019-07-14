export default function currencyFilters(value,currency='RUB'){{
  return new Intl.NumberFormat('ru-RU',{
      style: 'currency',
      currency
  }).format(value)
}}