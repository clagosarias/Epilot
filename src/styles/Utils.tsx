export enum DeviceSize {
  mobile = 768,
  desktop = 769,
}

export const desktopStyles = () => {
  return `@media (min-width: ${DeviceSize.desktop}px)`;
};

export const mobileStyles = () => {
  return `@media (max-width: ${DeviceSize.mobile}px)`;
};