import { ILibraryDefinition, component, library } from 'sunmao';

import Layout from './components/_App/Layout';

@library({
  name: 'canvas',
  description: '测试库',
  namespace: 'cn.asany.ui.theme.startp',
})
class Canvas {
  @component()
  BasicLayout = Layout;
}

const canvas = new Canvas();

export default ([canvas] as any) as ILibraryDefinition[];
