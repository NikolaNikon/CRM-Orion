import { defineObject, FieldType } from 'twenty-sdk/define';

export const TIME_BLOCK_UNIVERSAL_IDENTIFIER =
  '5357ea4e-cd15-4d85-88cf-525228378bf7';
export const TIME_BLOCK_NAME_FIELD_UNIVERSAL_IDENTIFIER =
  'd7e6ee69-248e-4c7e-94d9-4716acc5e0f0';

export default defineObject({
  universalIdentifier: TIME_BLOCK_UNIVERSAL_IDENTIFIER,
  nameSingular: 'timeBlock',
  namePlural: 'timeBlocks',
  labelSingular: 'Блокировка времени',
  labelPlural: 'Блокировки времени',
  description: 'Недоступный для бронирования интервал зала.',
  icon: 'IconLock',
  labelIdentifierFieldMetadataUniversalIdentifier:
    TIME_BLOCK_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: TIME_BLOCK_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Название',
      icon: 'IconLock',
    },
    {
      universalIdentifier: '17384d10-1dc4-46c8-a84a-01346a623f9f',
      type: FieldType.DATE_TIME,
      name: 'startsAt',
      label: 'Начало',
      icon: 'IconCalendarEvent',
    },
    {
      universalIdentifier: 'fe5dd58b-8a57-4d2c-9518-0ffffc7f12f5',
      type: FieldType.DATE_TIME,
      name: 'endsAt',
      label: 'Окончание',
      icon: 'IconCalendarCheck',
    },
    {
      universalIdentifier: 'ff54e71d-6207-4e7b-a6d3-eaa699fa6a08',
      type: FieldType.RICH_TEXT,
      name: 'reason',
      label: 'Причина',
      icon: 'IconNotes',
      isNullable: true,
      defaultValue: null,
    },
  ],
});
