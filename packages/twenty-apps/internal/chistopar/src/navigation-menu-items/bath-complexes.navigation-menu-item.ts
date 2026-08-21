import { defineNavigationMenuItem } from 'twenty-sdk/define';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { BATH_COMPLEX_UNIVERSAL_IDENTIFIER } from '../objects/bath-complex.object';

export default defineNavigationMenuItem({
  universalIdentifier: '86e7e273-12a7-4b82-87e7-0b01fc7c9dc3',
  position: 0,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: BATH_COMPLEX_UNIVERSAL_IDENTIFIER,
});
