import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { HALL_UNIVERSAL_IDENTIFIER } from '../objects/hall.object';
import { TIME_BLOCK_UNIVERSAL_IDENTIFIER } from '../objects/time-block.object';

export const HALL_TIME_BLOCKS_FIELD_UNIVERSAL_IDENTIFIER =
  'a5efa785-ea76-4767-be5b-35a776b5b002';
export const TIME_BLOCK_HALL_FIELD_UNIVERSAL_IDENTIFIER =
  '604252b8-f074-4aec-9c54-bde59f76e6a7';

export default defineField({
  universalIdentifier: HALL_TIME_BLOCKS_FIELD_UNIVERSAL_IDENTIFIER,
  objectUniversalIdentifier: HALL_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'timeBlocks',
  label: 'Блокировки времени',
  relationTargetObjectMetadataUniversalIdentifier:
    TIME_BLOCK_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    TIME_BLOCK_HALL_FIELD_UNIVERSAL_IDENTIFIER,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
