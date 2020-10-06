export const formatCurrency = (
  value: number,
  codeCurrency?: string,
): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: codeCurrency || 'BRL',
  });
};
