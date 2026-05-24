import DesignPage from '@/components/DesignPage';
import { getDesignMetadata } from '@/lib/design-pages';

const fileName = 'Now.html';

export function generateMetadata() {
  return getDesignMetadata(fileName);
}

export default function Now() {
  return <DesignPage fileName={fileName} />;
}
