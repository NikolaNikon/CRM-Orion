import {
  COMPLEX_DISCHARGES_FIELD_UNIVERSAL_IDENTIFIER,
  DISCHARGE_COMPLEX_FIELD_UNIVERSAL_IDENTIFIER,
} from './complex-discharges.field';
import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { BATH_COMPLEX_UNIVERSAL_IDENTIFIER } from '../objects/bath-complex.object';
import { DISCHARGE_UNIVERSAL_IDENTIFIER } from '../objects/discharge.object';

export default defineField({
  universalIdentifier: DISCHARGE_COMPLEX_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: DISCHARGE_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'bathComplex',
  label: 'Банный комплекс',
  relationTargetObjectMetadataUniversalIdentifier:
    BATH_COMPLEX_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    COMPLEX_DISCHARGES_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.CASCADE,
    joinColumnName: 'bathComplexId',
  },
});
