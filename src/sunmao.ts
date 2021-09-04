import { ILibraryDefinition, component, library } from 'sunmao';

import BasicLayout from './BasicLayout';

@library({
  name: 'canvas',
  description: '测试库',
  namespace: 'cn.asany.ui.theme.canvas',
})
class Canvas {
  @component()
  BasicLayout = BasicLayout;
}

const canvas = new Canvas();

export default ([canvas] as any) as ILibraryDefinition[];
