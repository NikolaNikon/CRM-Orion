import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { DISCHARGE_UNIVERSAL_IDENTIFIER } from '../objects/discharge.object';
import { HALL_UNIVERSAL_IDENTIFIER } from '../objects/hall.object';

export const DISCHARGE_HALLS_FIELD_UNIVERSAL_IDENTIFIER =
  '4b2c7a02-664b-4bcc-af84-6185f3eb7e09';
export const HALL_DISCHARGE_FIELD_UNIVERSAL_IDENTIFIER =
  'bb75d947-2807-45a3-9f36-ddd8a52910a8';

export default defineField({
  universalIdentifier: DISCHARGE_HALLS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: DISCHARGE_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'halls',
  label: 'Залы',
  relationTargetObjectMetadataUniversalIdentifier: HALL_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    HALL_DISCHARGE_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
