const allIcons = [
  'accessibility',
  'account-multiple',
  'account-circle',
  'airplane',
  'arrow-back',
  'arrow_down',
  'arrow_up',
  'sync',
  'av-timer',
  'bug',
  'cached',
  'phone-split',
  'phone',
  'cart',
  'checkbox-blank',
  'checkbox-marked',
  'close',
  'cloud',
  'palette',
  'credit-card',
  'cellphone-link',
  'car',
  'subway',
  'done',
  'email',
  'calendar',
  'facebook',
  'heart',
  'flag',
  'folder',
  'download',
  'github',
  'golang',
  'google',
  'star',
  'group-add',
  'home',
  'inbox',
  'keyboard-arrow-down',
  'keyboard-arrow-left',
  'keyboard-arrow-right',
  'keyboard-arrow-up',
  'label',
  'layers',
  'martini',
  'tag',
  'location-on',
  'lock',
  'map',
  'menu-down',
  'menu',
  'more-horiz',
  'more-vert',
  'navigate_after',
  'navigate_before',
  'nodejs',
  'notifications-none',
  'notifications',
  'person-add',
  'cellphone-android',
  'play-arrow',
  'playlist-add',
  'plus',
  'upload',
  'python',
  'clock',
  'forum',
  'map-marker',
  'ruby',
  'school',
  'search',
  'settings-backup-restore',
  'share-variant',
  'cart',
  'sync',
  'sync-problem',
  'system-update-tv',
  'terminal',
  'filmstrip',
  'twitter',
  'unfold-less',
  'unfold-more',
  'video',
  'view-module',
  'view-stream',
  'key',
  'warning',
  'webhooks',
  'fire',
  'briefcase'
];

const iconPickerIcons = [
  'human',
  'account-multiple',
  'airplane',
  'sync',
  'bug',
  'phone',
  'cloud',
  'palette',
  'credit-card',
  'cellphone-link',
  'car',
  'subway',
  'email',
  'calendar',
  'heart',
  'flag',
  'folder',
  'download',
  'star',
  'home',
  'inbox',
  'label',
  'layers',
  'martini',
  'tag',
  'lock',
  'map',
  'cellphone-android',
  'upload',
  'clock',
  'forum',
  'map-marker',
  'school',
  'share-variant',
  'cart',
  'filmstrip',
  'video',
  'key',
  'fire',
  'briefcase'
];

export default {

  getAllIcons() {
    return allIcons;
  },

  getIconPickerIcons() {
    return iconPickerIcons;
  },

  getRandomIconPickerIcon() {
    const icons = this.getIconPickerIcons();
    const iconsCount = icons.length;
    const randomNumber = Math.floor((Math.random() * iconsCount));

    return icons[randomNumber];
  },

  contains(string) {
    return allIcons.indexOf(string) !== -1;
  }

};
