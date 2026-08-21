import { defineNavigationMenuItem } from 'twenty-sdk/define';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { GUEST_UNIVERSAL_IDENTIFIER } from '../objects/guest.object';

export default defineNavigationMenuItem({
  universalIdentifier: '906f4884-347c-4192-a0b3-70918e96e008',
  position: 3,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: GUEST_UNIVERSAL_IDENTIFIER,
});
