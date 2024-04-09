import { SECTION_DATA } from '../../util/mainSectionData';
import MainSectionItem from './MainSectionItem';

export default function Main() {
  return (
    <main className='flex flex-col justify-center items-center py-16 lg:px-24 xl:px-40'>
      {SECTION_DATA.map((item, index) => <MainSectionItem 
        key={`${item}#${index}`}
        img375={item.smallImage}
        img768={item.mediumImage}
        img1200={item.largeImage}
        img1440={item.extraLargeImage}
        title={item.title}
        description={item.description}
        index={index}
      />)}
    </main>
  )
}