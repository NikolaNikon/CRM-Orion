import { defineObject, FieldType } from 'twenty-sdk/define';

export const BOOKING_UNIVERSAL_IDENTIFIER =
  '8800d190-3321-41a0-815e-ea2d01a35a53';
export const BOOKING_CODE_FIELD_UNIVERSAL_IDENTIFIER =
  '8db90f01-0bce-443c-8355-3f0be53a824d';

export enum BookingStatus {
  NEW = 'NEW',
  PENDING_CONFIRMATION = 'PENDING_CONFIRMATION',
  CONFIRMED = 'CONFIRMED',
  DECLINED = 'DECLINED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  NO_SHOW = 'NO_SHOW',
}

export enum BookingSource {
  MANUAL = 'MANUAL',
  WEBSITE = 'WEBSITE',
}

export default defineObject({
  universalIdentifier: BOOKING_UNIVERSAL_IDENTIFIER,
  nameSingular: 'booking',
  namePlural: 'bookings',
  labelSingular: 'Заявка',
  labelPlural: 'Заявки',
  description: 'Заявка или подтверждённое бронирование зала.',
  icon: 'IconCalendarEvent',
  labelIdentifierFieldMetadataUniversalIdentifier:
    BOOKING_CODE_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: BOOKING_CODE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'code',
      label: 'Номер заявки',
      icon: 'IconHash',
    },
    {
      universalIdentifier: '7602a13c-7fb9-4262-be27-bb74ae3769a1',
      type: FieldType.DATE_TIME,
      name: 'startsAt',
      label: 'Начало',
      icon: 'IconCalendarEvent',
    },
    {
      universalIdentifier: '16efaea3-3f7f-4b2d-8dad-245733a380c3',
      type: FieldType.DATE_TIME,
      name: 'endsAt',
      label: 'Окончание',
      icon: 'IconCalendarCheck',
    },
    {
      universalIdentifier: 'f8a60872-8023-47ba-b3fe-ab34ffb69948',
      type: FieldType.NUMBER,
      name: 'guestCount',
      label: 'Количество гостей',
      icon: 'IconUsers',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: '7c62ef3f-84d0-4bcb-abb7-2d3e3f374aac',
      type: FieldType.CURRENCY,
      name: 'priceFrom',
      label: 'Цена от',
      icon: 'IconCurrencyRuble',
      isNullable: true,
      defaultValue: null,
    },
    {
      universalIdentifier: 'fc20b1ec-f9fc-4f5f-96b1-0f1b5ded8b72',
      type: FieldType.SELECT,
      name: 'status',
      label: 'Статус',
      icon: 'IconProgressCheck',
      defaultValue: `'${BookingStatus.NEW}'`,
      options: [
        {
          id: 'cf8e9f84-1d2d-4089-97ce-a4817507a2f7',
          value: BookingStatus.NEW,
          label: 'Новое',
          position: 0,
          color: 'blue',
        },
        {
          id: 'cb0b13dc-becd-46dd-9ef9-ebb9f625de2c',
          value: BookingStatus.PENDING_CONFIRMATION,
          label: 'На подтверждении',
          position: 1,
          color: 'orange',
        },
        {
          id: '9bf346b9-b75e-4c91-b0fe-8794d69d67cf',
          value: BookingStatus.CONFIRMED,
          label: 'Подтверждено',
          position: 2,
          color: 'green',
        },
        {
          id: '7a60f8ed-4d3a-4fb7-b9c3-63c0496b7060',
          value: BookingStatus.DECLINED,
          label: 'Отклонено',
          position: 3,
          color: 'red',
        },
        {
          id: 'c63f5ff9-4435-4a3e-968a-858d27d07e3f',
          value: BookingStatus.CANCELLED,
          label: 'Отменено',
          position: 4,
          color: 'gray',
        },
        {
          id: 'e3120508-e1b8-4d52-9695-31571f4fbfa9',
          value: BookingStatus.COMPLETED,
          label: 'Завершено',
          position: 5,
          color: 'green',
        },
        {
          id: 'a54e91f3-3124-4622-83e6-b6a1ae6c4e12',
          value: BookingStatus.NO_SHOW,
          label: 'Неявка',
          position: 6,
          color: 'red',
        },
      ],
    },
    {
      universalIdentifier: '97a4bacf-6871-4801-bb51-c547cdd85253',
      type: FieldType.SELECT,
      name: 'source',
      label: 'Источник',
      icon: 'IconWorld',
      defaultValue: `'${BookingSource.MANUAL}'`,
      options: [
        {
          id: 'fb9c2ac3-9d74-4f8e-b276-fb1d0905a583',
          value: BookingSource.MANUAL,
          label: 'CRM',
          position: 0,
          color: 'gray',
        },
        {
          id: 'd9c221c0-4305-4c0e-ab92-650aa18d910e',
          value: BookingSource.WEBSITE,
          label: 'Сайт',
          position: 1,
          color: 'blue',
        },
      ],
    },
    {
      universalIdentifier: '79408800-92e5-40a1-a371-293ca783803c',
      type: FieldType.RICH_TEXT,
      name: 'comment',
      label: 'Комментарий',
      icon: 'IconNotes',
      isNullable: true,
      defaultValue: null,
    },
  ],
});
