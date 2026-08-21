import { defineObject, FieldType } from 'twenty-sdk/define';

export const DISCHARGE_UNIVERSAL_IDENTIFIER =
  'e25d202e-fc2e-41a7-8a3b-65b43c5e35c3';
export const DISCHARGE_NAME_FIELD_UNIVERSAL_IDENTIFIER =
  '1de28312-03a8-46a2-83f9-f76c907be299';

export default defineObject({
  universalIdentifier: DISCHARGE_UNIVERSAL_IDENTIFIER,
  nameSingular: 'discharge',
  namePlural: 'discharges',
  labelSingular: 'Разряд',
  labelPlural: 'Разряды',
  description: 'Группа залов банного комплекса.',
  icon: 'IconLayoutGrid',
  labelIdentifierFieldMetadataUniversalIdentifier:
    DISCHARGE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: DISCHARGE_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Название',
      icon: 'IconCategory',
    },
    {
      universalIdentifier: '5f980b37-1181-4e45-8d83-e7d751195d17',
      type: FieldType.RICH_TEXT,
      name: 'description',
      label: 'Описание',
      icon: 'IconFileDescription',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '46d98055-69e7-4f6e-a055-af5d5188544d',
      type: FieldType.FILES,
      name: 'photos',
      label: 'Фотографии',
      icon: 'IconPhoto',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: 'b21ed441-49cf-48f2-ac37-de4796e6ab35',
      type: FieldType.POSITION,
      name: 'position',
      label: 'Порядок показа',
      icon: 'IconListNumbers',
      defaultValue: 0,
    },
    {
      universalIdentifier: 'f2bd5703-3942-4298-a180-e542b5708648',
      type: FieldType.BOOLEAN,
      name: 'isActive',
      label: 'Активен',
      icon: 'IconCircleCheck',
      defaultValue: true,
    },
  ],
});
