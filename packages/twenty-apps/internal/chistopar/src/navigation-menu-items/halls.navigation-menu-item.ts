import { defineNavigationMenuItem } from 'twenty-sdk/define';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { HALL_UNIVERSAL_IDENTIFIER } from '../objects/hall.object';

export default defineNavigationMenuItem({
  universalIdentifier: 'b4c03139-381b-4704-9d34-7951ddd50730',
  position: 2,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: HALL_UNIVERSAL_IDENTIFIER,
});
