import {
  BOOKING_GUEST_FIELD_UNIVERSAL_IDENTIFIER,
  GUEST_BOOKINGS_FIELD_UNIVERSAL_IDENTIFIER,
} from './guest-bookings.field';
import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { BOOKING_UNIVERSAL_IDENTIFIER } from '../objects/booking.object';
import { GUEST_UNIVERSAL_IDENTIFIER } from '../objects/guest.object';

export default defineField({
  universalIdentifier: BOOKING_GUEST_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: BOOKING_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'guest',
  label: 'Гость',
  relationTargetObjectMetadataUniversalIdentifier: GUEST_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    GUEST_BOOKINGS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'guestId',
  },
});
