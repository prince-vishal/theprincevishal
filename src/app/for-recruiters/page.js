import DesignPage from '@/components/DesignPage';
import { getDesignMetadata } from '@/lib/design-pages';

const fileName = 'For Recruiters.html';

export function generateMetadata() {
  return getDesignMetadata(fileName);
}

export default function ForRecruiters() {
  return <DesignPage fileName={fileName} />;
}
