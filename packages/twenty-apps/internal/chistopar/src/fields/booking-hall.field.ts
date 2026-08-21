import {
  BOOKING_HALL_FIELD_UNIVERSAL_IDENTIFIER,
  HALL_BOOKINGS_FIELD_UNIVERSAL_IDENTIFIER,
} from './hall-bookings.field';
import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { BOOKING_UNIVERSAL_IDENTIFIER } from '../objects/booking.object';
import { HALL_UNIVERSAL_IDENTIFIER } from '../objects/hall.object';

export default defineField({
  universalIdentifier: BOOKING_HALL_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: BOOKING_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'hall',
  label: 'Зал',
  relationTargetObjectMetadataUniversalIdentifier: HALL_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    HALL_BOOKINGS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.RESTRICT,
    joinColumnName: 'hallId',
  },
});
