import { defineApplication } from 'twenty-sdk/define';

export const APPLICATION_UNIVERSAL_IDENTIFIER =
  '8400acae-a558-43a1-9990-493ee9c6ce06';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: 'Чистопар',
  description:
    'CRM для банных комплексов: карточки, разряды, залы, гости и бронирования.',
});
