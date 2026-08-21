export type DailyBoardStatus =
  | 'NEW'
  | 'PENDING_CONFIRMATION'
  | 'CONFIRMED'
  | 'DECLINED'
  | 'CANCELLED'
  | 'COMPLETED'
  | 'NO_SHOW'
  | 'BLOCKED';

export type DailyBoardItem = {
  id: string;
  hallId: string;
  startsAt: Date;
  endsAt: Date;
  status: DailyBoardStatus;
  title: string;
  subtitle?: string;
};

export type DailyBoardEntry = DailyBoardItem & {
  startsAtMinute: number;
  endsAtMinute: number;
  durationMinutes: number;
};

const minutesSinceDayStart = (value: Date, dayStart: Date) =>
  Math.round((value.getTime() - dayStart.getTime()) / 60_000);

export const isBusyBoardStatus = (status: DailyBoardStatus) =>
  status === 'PENDING_CONFIRMATION' ||
  status === 'CONFIRMED' ||
  status === 'BLOCKED';

export const buildDailyBoardEntries = ({
  items,
  dayStart,
  dayEnd,
}: {
  items: DailyBoardItem[];
  dayStart: Date;
  dayEnd: Date;
}): DailyBoardEntry[] =>
  items
    .filter(
      (item) =>
        isBusyBoardStatus(item.status) &&
        item.startsAt < dayEnd &&
        item.endsAt > dayStart,
    )
    .map((item) => {
      const startsAt = new Date(Math.max(item.startsAt.getTime(), dayStart.getTime()));
      const endsAt = new Date(Math.min(item.endsAt.getTime(), dayEnd.getTime()));
      const startsAtMinute = minutesSinceDayStart(startsAt, dayStart);
      const endsAtMinute = minutesSinceDayStart(endsAt, dayStart);

      return {
        ...item,
        startsAtMinute,
        endsAtMinute,
        durationMinutes: endsAtMinute - startsAtMinute,
      };
    })
    .sort((left, right) => left.startsAtMinute - right.startsAtMinute);

export const hasTimeOverlap = ({
  startsAt,
  endsAt,
  existingItems,
}: {
  startsAt: Date;
  endsAt: Date;
  existingItems: DailyBoardItem[];
}) =>
  existingItems.some(
    (item) =>
      isBusyBoardStatus(item.status) &&
      startsAt < item.endsAt &&
      endsAt > item.startsAt,
  );
