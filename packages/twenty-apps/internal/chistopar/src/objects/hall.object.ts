import { defineObject, FieldType } from 'twenty-sdk/define';

export const HALL_UNIVERSAL_IDENTIFIER =
  '97fed6ee-6dcb-4d40-9b4e-45ba591f0630';
export const HALL_NAME_FIELD_UNIVERSAL_IDENTIFIER =
  'f6ef6fd2-c7df-4de8-a084-c0911ebf70f0';

export default defineObject({
  universalIdentifier: HALL_UNIVERSAL_IDENTIFIER,
  nameSingular: 'hall',
  namePlural: 'halls',
  labelSingular: 'Зал',
  labelPlural: 'Залы',
  description: 'Бронируемый зал банного комплекса.',
  icon: 'IconDoorEnter',
  labelIdentifierFieldMetadataUniversalIdentifier:
    HALL_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: HALL_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Название',
      icon: 'IconDoor',
    },
    {
      universalIdentifier: '1c43947e-a7a0-47f2-852c-5130e75edc4a',
      type: FieldType.RICH_TEXT,
      name: 'description',
      label: 'Описание',
      icon: 'IconFileDescription',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '97128c1a-b4e6-45eb-b5b6-6bfb7c974d4b',
      type: FieldType.NUMBER,
      name: 'capacity',
      label: 'Вместимость',
      icon: 'IconUsers',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '9913e65e-9208-473e-8580-524f3c8e58f7',
      type: FieldType.CURRENCY,
      name: 'priceFrom',
      label: 'Цена от',
      icon: 'IconCurrencyRuble',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '21468061-e68e-476f-83c8-b0772ec8e021',
      type: FieldType.NUMBER,
      name: 'minimumDurationMinutes',
      label: 'Минимальная длительность, минут',
      icon: 'IconClockHour4',
      defaultValue: 60,
    },
    {
      universalIdentifier: 'c9d5e7ed-ba54-4b4c-a582-157ba25ed4eb',
      type: FieldType.NUMBER,
      name: 'slotDurationMinutes',
      label: 'Шаг слота, минут',
      icon: 'IconClock',
      defaultValue: 30,
    },
    {
      universalIdentifier: '96d6d5c4-a6fb-40fd-af4d-21c35e1b431b',
      type: FieldType.FILES,
      name: 'photos',
      label: 'Фотографии',
      icon: 'IconPhoto',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '4ff15fc5-8ab1-46bd-92b6-fde9fbfcb52b',
      type: FieldType.BOOLEAN,
      name: 'isActive',
      label: 'Доступен для бронирования',
      icon: 'IconCalendarCheck',
      defaultValue: true,
    },
  ],
});
