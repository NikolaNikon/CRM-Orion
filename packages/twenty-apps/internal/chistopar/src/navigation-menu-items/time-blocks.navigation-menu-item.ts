import { defineNavigationMenuItem } from 'twenty-sdk/define';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { TIME_BLOCK_UNIVERSAL_IDENTIFIER } from '../objects/time-block.object';

export default defineNavigationMenuItem({
  universalIdentifier: '5f35b992-5c2c-4e14-8ce4-74f2f1bb4cf4',
  position: 5,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: TIME_BLOCK_UNIVERSAL_IDENTIFIER,
});
