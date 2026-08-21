import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { BATH_COMPLEX_UNIVERSAL_IDENTIFIER } from '../objects/bath-complex.object';
import { DISCHARGE_UNIVERSAL_IDENTIFIER } from '../objects/discharge.object';

export const COMPLEX_DISCHARGES_FIELD_UNIVERSAL_IDENTIFIER =
  'fd42fa38-64db-43c2-8e87-a3d94d6a539a';
export const DISCHARGE_COMPLEX_FIELD_UNIVERSAL_IDENTIFIER =
  '489acab9-f15b-4f81-8f66-619037793f01';

export default defineField({
  universalIdentifier: COMPLEX_DISCHARGES_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: BATH_COMPLEX_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'discharges',
  label: 'Разряды',
  relationTargetObjectMetadataUniversalIdentifier:
    DISCHARGE_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    DISCHARGE_COMPLEX_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
