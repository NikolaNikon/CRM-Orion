import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { BOOKING_UNIVERSAL_IDENTIFIER } from '../objects/booking.object';
import { GUEST_UNIVERSAL_IDENTIFIER } from '../objects/guest.object';

export const GUEST_BOOKINGS_FIELD_UNIVERSAL_IDENTIFIER =
  '007700c8-94f2-4d9c-a37c-12cd01f5a1d0';
export const BOOKING_GUEST_FIELD_UNIVERSAL_IDENTIFIER =
  '660427c3-ad42-470b-aa39-98cd079e9c9e';

export default defineField({
  universalIdentifier: GUEST_BOOKINGS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: GUEST_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'bookings',
  label: 'Заявки',
  relationTargetObjectMetadataUniversalIdentifier: BOOKING_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    BOOKING_GUEST_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
