import { defineObject, FieldType } from 'twenty-sdk/define';

export const BATH_COMPLEX_UNIVERSAL_IDENTIFIER =
  'cc61ec74-9760-4062-b7fa-4245827a7150';
export const BATH_COMPLEX_NAME_FIELD_UNIVERSAL_IDENTIFIER =
  '0db87739-bf80-4376-b8f7-2d5b8880d257';

export default defineObject({
  universalIdentifier: BATH_COMPLEX_UNIVERSAL_IDENTIFIER,
  nameSingular: 'bathComplex',
  namePlural: 'bathComplexes',
  labelSingular: 'Банный комплекс',
  labelPlural: 'Банные комплексы',
  description: 'Карточка банного комплекса в экосистеме Чистопара.',
  icon: 'IconBuildingCommunity',
  labelIdentifierFieldMetadataUniversalIdentifier:
    BATH_COMPLEX_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: BATH_COMPLEX_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Название',
      icon: 'IconBuilding',
    },
    {
      universalIdentifier: '95343daf-3e76-4fe8-bac6-feba2955fbcd',
      type: FieldType.RICH_TEXT,
      name: 'description',
      label: 'Описание',
      icon: 'IconFileDescription',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: 'f6747928-d189-4da0-bff6-867db626cd44',
      type: FieldType.ADDRESS,
      name: 'address',
      label: 'Адрес',
      icon: 'IconMapPin',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '12d7cecd-5b36-4bd6-9ac1-64235e85e5fa',
      type: FieldType.PHONES,
      name: 'phones',
      label: 'Телефоны',
      icon: 'IconPhone',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '5efa48a6-fa60-4ead-80f9-3e76d95cf144',
      type: FieldType.FILES,
      name: 'photos',
      label: 'Фотографии',
      icon: 'IconPhoto',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '6f694986-4867-4cd4-a15a-6e2f74277a2a',
      type: FieldType.RICH_TEXT,
      name: 'workingHours',
      label: 'Режим работы',
      icon: 'IconClock',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '52e4cb57-e4ba-4fed-a1ad-92e9df157b65',
      type: FieldType.BOOLEAN,
      name: 'isActive',
      label: 'Активен',
      icon: 'IconCircleCheck',
      defaultValue: true,
    },
  ],
});
