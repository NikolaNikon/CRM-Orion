import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { BOOKING_UNIVERSAL_IDENTIFIER } from '../objects/booking.object';
import { HALL_UNIVERSAL_IDENTIFIER } from '../objects/hall.object';

export const HALL_BOOKINGS_FIELD_UNIVERSAL_IDENTIFIER =
  '6111c2e7-20a1-4dc3-9aee-5fa5a19b6046';
export const BOOKING_HALL_FIELD_UNIVERSAL_IDENTIFIER =
  '76638883-31f0-46d9-96d6-8a5ca4ae13bf';

export default defineField({
  universalIdentifier: HALL_BOOKINGS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: HALL_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'bookings',
  label: 'Заявки',
  relationTargetObjectMetadataUniversalIdentifier: BOOKING_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    BOOKING_HALL_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
