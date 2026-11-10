import { Alert } from '@mantine/core';

export function GroupConfigWarning() {
  if (import.meta.env.VITE_GROUP_ID?.trim()) return null;
  return <Alert color="red" role="alert" mb="md">
    Preencha VITE_GROUP_ID no seu .env, confirme com o Tiago o valor.
  </Alert>;
}
