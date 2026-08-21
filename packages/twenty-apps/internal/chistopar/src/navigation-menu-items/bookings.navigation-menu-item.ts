import { defineNavigationMenuItem } from 'twenty-sdk/define';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { BOOKING_UNIVERSAL_IDENTIFIER } from '../objects/booking.object';

export default defineNavigationMenuItem({
  universalIdentifier: '455ed116-1ac0-4d15-a151-4384e8f37c2a',
  position: 4,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: BOOKING_UNIVERSAL_IDENTIFIER,
});
