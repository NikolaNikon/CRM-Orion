import {
  DISCHARGE_HALLS_FIELD_UNIVERSAL_IDENTIFIER,
  HALL_DISCHARGE_FIELD_UNIVERSAL_IDENTIFIER,
} from './discharge-halls.field';
import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { DISCHARGE_UNIVERSAL_IDENTIFIER } from '../objects/discharge.object';
import { HALL_UNIVERSAL_IDENTIFIER } from '../objects/hall.object';

export default defineField({
  universalIdentifier: HALL_DISCHARGE_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: HALL_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'discharge',
  label: 'Разряд',
  relationTargetObjectMetadataUniversalIdentifier:
    DISCHARGE_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    DISCHARGE_HALLS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.CASCADE,
    joinColumnName: 'dischargeId',
  },
});
