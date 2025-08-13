import 'styled-components';

import { theme } from '@app/theme/theme';

type ITheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends ITheme {}
}
