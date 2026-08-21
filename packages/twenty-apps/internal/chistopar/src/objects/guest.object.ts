import { defineObject, FieldType } from 'twenty-sdk/define';

export const GUEST_UNIVERSAL_IDENTIFIER =
  '855951fa-9191-445e-8851-baae0338b009';
export const GUEST_NAME_FIELD_UNIVERSAL_IDENTIFIER =
  '40d473d0-c395-4a74-bb22-c0f15c57d0e0';

export default defineObject({
  universalIdentifier: GUEST_UNIVERSAL_IDENTIFIER,
  nameSingular: 'guest',
  namePlural: 'guests',
  labelSingular: 'Гость',
  labelPlural: 'Гости',
  description: 'Посетитель банного комплекса с историей заявок.',
  icon: 'IconUser',
  labelIdentifierFieldMetadataUniversalIdentifier:
    GUEST_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: GUEST_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Имя',
      icon: 'IconUser',
    },
    {
      universalIdentifier: '08fd193c-d3cc-4988-94ed-d13ae9e35709',
      type: FieldType.PHONES,
      name: 'phones',
      label: 'Телефон',
      icon: 'IconPhone',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: 'e5c52e64-19b6-44fa-ba15-38c360fafbc8',
      type: FieldType.EMAILS,
      name: 'emails',
      label: 'Email',
      icon: 'IconMail',
      isNullable: true,
      defaultValue: null,
    },
  ],
});
