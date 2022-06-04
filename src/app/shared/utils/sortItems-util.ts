import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { SortFieldValue } from './sortFieldValue-util';

export function sortItems(items: IVideoItem[], field: string): void {

  switch (field) {
    case 'date': items.sort((a, b) => SortFieldValue.DATE(a.snippet.publishedAt) - SortFieldValue.DATE(b.snippet.publishedAt))
      break;

    case 'views':
      items.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
      break;

    default:
      break;
  }

}

