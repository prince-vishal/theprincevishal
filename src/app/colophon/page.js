import DesignPage from '@/components/DesignPage';
import { getDesignMetadata } from '@/lib/design-pages';

const fileName = 'Colophon.html';

export function generateMetadata() {
  return getDesignMetadata(fileName);
}

export default function Colophon() {
  return <DesignPage fileName={fileName} />;
}
