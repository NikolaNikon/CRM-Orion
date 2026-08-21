import { defineNavigationMenuItem } from 'twenty-sdk/define';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { DISCHARGE_UNIVERSAL_IDENTIFIER } from '../objects/discharge.object';

export default defineNavigationMenuItem({
  universalIdentifier: '4051224c-368c-45a4-8697-e950fc3829a4',
  position: 1,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: DISCHARGE_UNIVERSAL_IDENTIFIER,
});
