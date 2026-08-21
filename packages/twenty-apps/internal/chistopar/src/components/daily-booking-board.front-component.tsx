import { defineFrontComponent } from 'twenty-sdk/define';
import { DailyBookingBoard } from './daily-booking-board.component';

export default defineFrontComponent({
  universalIdentifier: '4da0b208-925c-40f3-a7f0-823afad50518',
  name: 'daily-booking-board',
  description: 'Дневная шахматка заявок и блокировок времени по залам.',
  component: DailyBookingBoard,
});
