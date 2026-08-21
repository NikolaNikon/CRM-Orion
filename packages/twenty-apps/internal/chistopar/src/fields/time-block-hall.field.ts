import {
  HALL_TIME_BLOCKS_FIELD_UNIVERSAL_IDENTIFIER,
  TIME_BLOCK_HALL_FIELD_UNIVERSAL_IDENTIFIER,
} from './hall-time-blocks.field';
import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { HALL_UNIVERSAL_IDENTIFIER } from '../objects/hall.object';
import { TIME_BLOCK_UNIVERSAL_IDENTIFIER } from '../objects/time-block.object';

export default defineField({
  universalIdentifier: TIME_BLOCK_HALL_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: TIME_BLOCK_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'hall',
  label: 'Зал',
  relationTargetObjectMetadataUniversalIdentifier: HALL_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    HALL_TIME_BLOCKS_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.CASCADE,
    joinColumnName: 'hallId',
  },
});
