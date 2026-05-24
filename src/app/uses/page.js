import DesignPage from '@/components/DesignPage';
import { getDesignMetadata } from '@/lib/design-pages';

const fileName = 'Uses.html';

export function generateMetadata() {
  return getDesignMetadata(fileName);
}

export default function Uses() {
  return <DesignPage fileName={fileName} />;
}
